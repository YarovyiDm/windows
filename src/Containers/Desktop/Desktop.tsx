import React, { useRef, useState } from "react";
import { useContextMenu, useLanguage } from "Hooks";
import { useAppSelector } from "Store/index";
import {
    selectDraggableFile,
    selectFiles,
    selectOpenedWindows,
} from "Store/selectors/Desktop";
import { selectWallpaper } from "Store/selectors/System";
import { DesktopWrapper } from "Containers/Desktop/Desktop.styled";
import { DesktopFile, FILE_TYPE } from "Types/Desktop";
import DraggableFileCopy
    from "Containers/Desktop/Components/DraggableFile/Components/DraggableFileCopy/DraggableFileCopy";
import { ContextMenu, DraggableFile } from "Components/index";
import Selection from "Containers/Desktop/Components/Selection/Selection";
import Notification from 'Components/Notification/Notification';
import { CONTEXT_MENU_TYPES } from "Constants/System";
import { TRANSLATION_KEYS } from "Constants/Translation";
import DesktopWindowsRenderer from "Containers/Desktop/Components/DesktopWindowsRenderer/DesktopWindowsRenderer";
import { useFileSelection } from "./Hooks/useFileSelection";
import type { MouseEvent as ReactMouseEvent, DragEvent } from "react";

const Desktop = () => {
    const selectionRef = useRef<HTMLDivElement>(null);
    const [renameFileId, setRenameFileId] = useState('');
    const [targetFolderId, setTargetFolderId] = useState<string>("");

    const openedWindows = useAppSelector(selectOpenedWindows);
    const desktopFiles = useAppSelector(selectFiles);
    const wallpaper = useAppSelector(selectWallpaper);
    const selectedFiles = useAppSelector(state => state.desktop.selectedFiles);
    const draggingFile = useAppSelector(selectDraggableFile());

    const {
        contextMenuVisible,
        contextMenuPosition,
        clickedType,
        handleContextMenu,
        setContextMenuVisible,
        targetId,
    } = useContextMenu();
    const { translate } = useLanguage();
    const { isSelecting, startPositionRef, currentPositionRef, startSelection } = useFileSelection();

    const targetFolderHandle = (id: string) => {
        setTargetFolderId(id);
    };

    const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
        if (!(e.target as HTMLElement).closest(".prevent-selecting")) {
            startSelection(e.clientX, e.clientY);
        }
    };

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

            <DesktopWindowsRenderer
                windows={openedWindows}
                renameFileId={renameFileId}
                setRenameFileId={setRenameFileId}
                targetFolderId={targetFolderId}
                targetFolderHandle={targetFolderHandle}
            />

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

