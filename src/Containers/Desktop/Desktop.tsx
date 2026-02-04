import React, { useEffect, useRef, useState } from "react";
import { useContextMenu, useLanguage } from "Hooks";
import { useAppSelector, useAppDispatch } from "Store/index";
import {
    selectDraggableFile,
    selectFiles,
    selectOpenedWindows,
} from "Store/selectors/Desktop";
import { clearSelection, selectMultipleFiles } from "Store/slices/Desktop";
import { selectWallpaper } from "Store/selectors/System";
import SettingsWindow from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow";
import type { BasicCoordinates } from "Types/System";
import { DesktopWrapper } from "Containers/Desktop/Desktop.styled";
import { DesktopFile, FILE_TYPE, WINDOW_KIND } from "Types/Desktop";
import FolderWindow from "Containers/Desktop/Components/Windows/FolderWindow/FolderWindow";
import TextWindow from "Containers/Desktop/Components/Windows/TextWindow/TextWindow";
import DraggableFileCopy
    from "Containers/Desktop/Components/DraggableFile/Components/DraggableFileCopy/DraggableFileCopy";
import { ContextMenu, DraggableFile } from "Components/index";
import Selection from "Containers/Desktop/Components/Selection/Selection";
import Notification from 'Components/Notification/Notification';
import ChromeWindow from "Containers/Desktop/Components/Windows/ChromeWindow/ChromeWindow";
import { CONTEXT_MENU_TYPES, ZERO_POSITION } from "Constants/System";
import { DOM_EVENTS } from "Constants/Events";
import { TRANSLATION_KEYS } from "Constants/Translation";
import type { MouseEvent as ReactMouseEvent, DragEvent } from "react";

const Desktop = () => {
    const [isSelecting, setIsSelecting] = useState(false);
    const startPositionRef = useRef<BasicCoordinates>(ZERO_POSITION);
    const currentPositionRef = useRef<BasicCoordinates>(ZERO_POSITION);
    const selectionRef = useRef<HTMLDivElement>(null);
    const [renameFileId, setRenameFileId] = useState('');
    const draggingFile = useAppSelector(selectDraggableFile());

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
    const selectedFiles = useAppSelector(state => state.desktop.selectedFiles);
    const [targetFolderId, setTargetFolderId] = useState<string>("");

    const targetFolderHandle = (id: string) => {
        setTargetFolderId(id);
    };

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

        const handleMouseMove = (e: MouseEvent) => {
            if (!isSelecting) return;

            currentPositionRef.current = { x: e.clientX, y: e.clientY };

            const fileElements = Array.from(document.querySelectorAll('.desktop-file')) as HTMLElement[];

            const newSelected: string[] = [];

            fileElements.forEach(el => {
                const rect = el.getBoundingClientRect();

                const isIntersect =
                    rect.left < Math.max(startPositionRef.current.x, currentPositionRef.current.x) &&
                    rect.right > Math.min(startPositionRef.current.x, currentPositionRef.current.x) &&
                    rect.top < Math.max(startPositionRef.current.y, currentPositionRef.current.y) &&
                    rect.bottom > Math.min(startPositionRef.current.y, currentPositionRef.current.y);

                if (isIntersect) {
                    const fileName = el.getAttribute('data-name');

                    if (fileName) newSelected.push(fileName);
                }
            });

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
            data-id={FILE_TYPE.DESKTOP}
            data-file={FILE_TYPE.FOLDER}
            data-context={CONTEXT_MENU_TYPES.DESKTOP}
            onDragOver={(e: DragEvent) => e.preventDefault()}
        >
            <Notification text={translate(TRANSLATION_KEYS.FULL_SCREEN_ADVICE)} />

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
                    return <FolderWindow
                        setRenameFileId={setRenameFileId}
                        renameFileId={renameFileId}
                        key={win.id}
                        window={win}
                        targetFolderId={targetFolderId}
                        targetFolderHandle={targetFolderHandle}
                    />;

                case WINDOW_KIND.BROWSER:
                    return <ChromeWindow />;

                case WINDOW_KIND.SETTINGS:
                    return <SettingsWindow key={win.id} />;

                default:
                    return null;
                }
            })}

            {isSelecting && (
                <Selection
                    selectionRef={selectionRef}
                    startPosition={startPositionRef.current}
                    currentPosition={currentPositionRef.current}
                />
            )}

            {desktopFiles.map((file: DesktopFile) => (
                <DraggableFile
                    targetFolderId={targetFolderId}
                    targetFolderHandle={targetFolderHandle}
                    key={file.id}
                    file={file}
                    onContextMenu={handleContextMenu}
                    isSelected={selectedFiles.includes(file.name)}
                    renameFileId={renameFileId}
                    setRenameFileId={setRenameFileId}
                />
            ))}

            {draggingFile && (
                <DraggableFileCopy x={draggingFile.initialCursorPos.x} y={draggingFile.initialCursorPos.y} icon={draggingFile.icon} />
            )}
        </DesktopWrapper>
    );
};

export default Desktop;

