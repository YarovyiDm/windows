import React, { useEffect, useRef, useState } from "react";
import { DraggableFile, ContextMenu } from "Components";
import { isFileInSelection } from "utils/IsFileInSelection";
import {
    CLICK_EVENT,
    MOUSE_MOVE_EVENT,
    MOUSE_UP_EVENT,
    TEXT_FILE,
    ZERO_POSITION,
} from "Constants/System";
import { useAppSelector, useAppDispatch } from "Store/index";
import {
    selectIsWindowOpen,
    selectFiles,
    selectOpenedWindows,
} from "Store/selectors/Desktop";
import { selectMultipleFiles, clearSelection } from "Store/slices/Desktop";
import { DESKTOP_FILE_SIZE } from "Constants/File";
import { useContextMenu } from "Hooks/useContextMenu";
import { selectWallpaper } from "Store/selectors/System";
import TextWindow from "Containers/Desktop/Components/Windows/TextWindow/TextWindow";
import FolderWindow from "Containers/Desktop/Components/Windows/FolderWindow/FolderWindow";
import Notification from "Components/Notification/Notification";
import useLanguage from "Hooks/useLanguage";
import SettingsWindow from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow";
import type { BasicCoordinates } from "Types/System";
import Selection from "Containers/Desktop/Components/Selection/Selection";
import { DesktopWrapper } from "Containers/Desktop/Desktop.styled";
import type { MouseEvent as ReactMouseEvent, DragEvent } from "react";

const Desktop = () => {
    const [isSelecting, setIsSelecting] = useState(false);
    const startPositionRef = useRef<BasicCoordinates>(ZERO_POSITION);
    const currentPositionRef = useRef<BasicCoordinates>(ZERO_POSITION);
    const selectionRef = useRef<HTMLDivElement>(null);
    const [renameFileId, setRenameFileId] = useState('');

    const dispatch = useAppDispatch();
    const {
        contextMenuVisible,
        contextMenuPosition,
        clickedType,
        handleContextMenu,
        setContextMenuVisible,
        targetId,
    } = useContextMenu();
    const { translate } = useLanguage();

    const openedWindows = useAppSelector(selectOpenedWindows);
    const desktopFiles = useAppSelector(selectFiles);
    const wallpaper = useAppSelector(selectWallpaper);
    const isSettingsWindowOpen = useAppSelector(selectIsWindowOpen("Settings"));
    const selectedFiles = useAppSelector(state => state.desktop.selectedFiles);

    const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;

        if (!target.closest(".prevent-selecting")) {
            setIsSelecting(true);
            startPositionRef.current = { x: e.clientX, y: e.clientY };
            currentPositionRef.current = { x: e.clientX, y: e.clientY };
            dispatch(clearSelection());
        }
    };

    useEffect(() => {
        const handleClickOutside = () => setContextMenuVisible(false);

        const handleMouseMove = (e: Event) => {
            if (!isSelecting) return;
            if (!(e instanceof MouseEvent)) return;

            currentPositionRef.current = { x: e.clientX, y: e.clientY };

            const newSelected = desktopFiles
                .filter(file =>
                    isFileInSelection(file.position, DESKTOP_FILE_SIZE, {
                        startPosition: startPositionRef.current,
                        currentPosition: currentPositionRef.current,
                    }),
                )
                .map(f => f.name);

            dispatch(selectMultipleFiles(newSelected));
        };

        const handleMouseUp = () => {
            if (isSelecting) setIsSelecting(false);
        };

        document.addEventListener(CLICK_EVENT, handleClickOutside);
        document.addEventListener(MOUSE_MOVE_EVENT, handleMouseMove);
        document.addEventListener(MOUSE_UP_EVENT, handleMouseUp);

        return () => {
            document.removeEventListener(CLICK_EVENT, handleClickOutside);
            document.removeEventListener(MOUSE_MOVE_EVENT, handleMouseMove);
            document.removeEventListener(MOUSE_UP_EVENT, handleMouseUp);
        };
    }, [desktopFiles, dispatch, isSelecting, setContextMenuVisible]);

    return (
        <DesktopWrapper
            style={{ backgroundImage: `url(${wallpaper})` }}
            onMouseDown={handleMouseDown}
            onContextMenu={handleContextMenu}
            onDragOver={(e: DragEvent) => e.preventDefault()}
        >
            <Notification text={translate("fullscreenAdvice")} />

            {contextMenuVisible && (
                <ContextMenu
                    clickedType={clickedType}
                    contextMenuPosition={contextMenuPosition}
                    setContextMenuVisible={setContextMenuVisible}
                    targetId={targetId}
                    setRenameFileId={setRenameFileId}
                />
            )}

            {openedWindows.map(window => {
                if (window.isSystem) return null;
                if (window.type === TEXT_FILE) {
                    return (
                        <TextWindow
                            key={window.id}
                            name={window.fileName}
                            content={window.content as string}
                            id={window.id}
                        />
                    );
                }
                return (
                    <FolderWindow
                        key={window.id}
                        renameFileId={renameFileId}
                        setIsSelecting={setIsSelecting}
                        onContextMenu={handleContextMenu}
                        selectedFiles={selectedFiles}
                        setRenameFileId={setRenameFileId}
                        name={window.fileName}
                        id={window.id}
                    />
                );
            })}

            {isSelecting && (
                <Selection
                    selectionRef={selectionRef}
                    startPosition={startPositionRef.current}
                    currentPosition={currentPositionRef.current}
                />
            )}

            {desktopFiles.map(
                ({
                    name,
                    icon,
                    position,
                    isOpened,
                    innerContent,
                    id,
                    type,
                    size,
                }) => (
                    <DraggableFile
                        renameFileId={renameFileId}
                        key={name}
                        size={size}
                        name={name}
                        icon={icon}
                        position={position}
                        isOpened={isOpened}
                        innerContent={innerContent}
                        setIsSelecting={setIsSelecting}
                        isSelected={selectedFiles.includes(name)}
                        onContextMenu={handleContextMenu}
                        id={id}
                        type={type}
                        setRenameFileId={setRenameFileId}
                    />
                ),
            )}

            {isSettingsWindowOpen && <SettingsWindow />}
        </DesktopWrapper>
    );
};

export default Desktop;

