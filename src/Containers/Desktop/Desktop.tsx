import React, { useEffect, useRef, useState } from "react";
import { DraggableFile, ContextMenu } from "Components";
import { isFileInSelection } from "utils/IsFileInSelection";
import {
    DOM_EVENTS,
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
import Notification from "Components/Notification/Notification";
import useLanguage from "Hooks/useLanguage";
import SettingsWindow from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow";
import type { BasicCoordinates } from "Types/System";
import Selection from "Containers/Desktop/Components/Selection/Selection";
import { DesktopWrapper } from "Containers/Desktop/Desktop.styled";
import { DesktopFile, WINDOW_KIND } from "Types/Desktop";
import FolderWindow from "Containers/Desktop/Components/Windows/FolderWindow/FolderWindow";
import TextWindow from "Containers/Desktop/Components/Windows/TextWindow/TextWindow";
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

        document.addEventListener(DOM_EVENTS.CLICK, handleClickOutside);
        document.addEventListener(DOM_EVENTS.MOUSE_MOVE, handleMouseMove);
        document.addEventListener(DOM_EVENTS.MOUSE_UP, handleMouseUp);

        return () => {
            document.removeEventListener(DOM_EVENTS.CLICK, handleClickOutside);
            document.removeEventListener(DOM_EVENTS.MOUSE_MOVE, handleMouseMove);
            document.removeEventListener(DOM_EVENTS.MOUSE_UP, handleMouseUp);
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

            {openedWindows.map(win => {
                switch (win.kind) {

                case WINDOW_KIND.TEXT:
                    return <TextWindow key={win.id} desktopWindow={win} />;

                case WINDOW_KIND.FOLDER:
                    return <FolderWindow key={win.id} window={win} />;

                // case WINDOW_KIND.BROWSER:
                //     return <BrowserWindow key={win.id} tabs={win.payload.tabs} />;
                //
                case WINDOW_KIND.SETTINGS:
                    return <SettingsWindow key={win.id} />;

                default:
                    return <div>1</div>;
                }
            })};

            {isSelecting && (
                <Selection
                    selectionRef={selectionRef}
                    startPosition={startPositionRef.current}
                    currentPosition={currentPositionRef.current}
                />
            )}

            {desktopFiles.map((file: DesktopFile) => (
                <DraggableFile
                    key={file.id}
                    file={file}
                    setIsSelecting={setIsSelecting}
                    onContextMenu={handleContextMenu}
                    isSelected={selectedFiles.includes(file.name)}
                    renameFileId={renameFileId}
                    setRenameFileId={setRenameFileId}
                />
            ))}

            {isSettingsWindowOpen && <SettingsWindow />}
        </DesktopWrapper>
    );
};

export default Desktop;

