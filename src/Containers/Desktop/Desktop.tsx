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
import { handleMouseMoveHelper } from "Containers/Desktop/Desktop.helpers";
import Selection from "Containers/Desktop/Components/Selection/Selection";
import { DesktopWrapper } from "Containers/Desktop/Desktop.styled";
import { useWeatherForecast } from "Hooks/Api/useWeather";
import { getWeekdayName } from "../../utils/date";
import type { MouseEvent as ReactMouseEvent, DragEvent } from "react";

const Desktop = () => {
    const [isSelecting, setIsSelecting] = useState<boolean>(false);
    const [startPosition, setStartPosition] = useState<BasicCoordinates>(ZERO_POSITION);
    const [currentPosition, setCurrentPosition] =
        useState<BasicCoordinates>(ZERO_POSITION);
    const selectionRef = useRef<HTMLDivElement>(null);
    const [renameFileId, setRenameFileId] = useState<string>('');
    const weather = useWeatherForecast("Kyiv");

    console.log('date', getWeekdayName("2026-01-30"));

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

    const handleMouseDown = (
        e: ReactMouseEvent<HTMLDivElement>,
    ) => {
        const target = e.target as HTMLElement;

        if (!target.closest(".prevent-selecting")) {
            setIsSelecting(true);
            setStartPosition({ x: e.clientX, y: e.clientY });
            setCurrentPosition({ x: e.clientX, y: e.clientY });
            dispatch(clearSelection());
        }
    };

    useEffect(() => {
        const handleClickOutside = () => {
            setContextMenuVisible(false);
        };

        const handleMouseMoveEvent = (e: Event) => {
            if (!(e instanceof MouseEvent)) return;
            handleMouseMoveHelper(e, isSelecting, setCurrentPosition);
        };

        const handleMouseUpEvent = (e: Event) => {
            if (!(e instanceof MouseEvent)) return;
            setIsSelecting(false);
        };

        document.addEventListener(CLICK_EVENT, handleClickOutside);

        if (isSelecting) {
            document.addEventListener(MOUSE_MOVE_EVENT, handleMouseMoveEvent);
            document.addEventListener(MOUSE_UP_EVENT, handleMouseUpEvent);

            const newSelectedFiles = desktopFiles
                .filter(({ position }) =>
                    isFileInSelection(position, DESKTOP_FILE_SIZE, {
                        startPosition,
                        currentPosition,
                    }),
                )
                .map(({ name }) => name);

            dispatch(selectMultipleFiles(newSelectedFiles));
        }

        return () => {
            document.removeEventListener(CLICK_EVENT, handleClickOutside);
            document.removeEventListener(MOUSE_MOVE_EVENT, handleMouseMoveEvent);
            document.removeEventListener(MOUSE_UP_EVENT, handleMouseUpEvent);
        };
    }, [isSelecting, currentPosition, startPosition, desktopFiles, dispatch, setContextMenuVisible]);

    return (
        <DesktopWrapper
            style={{
                backgroundImage: `url(${wallpaper})`,
            }}
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
                if (window.isSystem) {
                    return;
                }
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
                        renameFileId={renameFileId}
                        setIsSelecting={setIsSelecting}
                        onContextMenu={handleContextMenu}
                        selectedFiles={selectedFiles}
                        setRenameFileId={setRenameFileId}
                        name={window.fileName}
                        id={window.id}
                        key={window.id}
                    />
                );
            })}

            {isSelecting && (
                <Selection selectionRef={selectionRef} startPosition={startPosition} currentPosition={currentPosition} />
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
