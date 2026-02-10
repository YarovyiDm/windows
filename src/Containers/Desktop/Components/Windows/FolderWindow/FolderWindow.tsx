import React, { useState } from "react";
import { Box } from '@mui/material';
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { DraggableFile } from "Components/index";
import { DesktopFile, FILE_TYPE, FolderFile, WINDOW_KIND } from "Types/Desktop";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectFolder, selectOpenedWindowLength } from "Store/selectors/Desktop";
import { CONTEXT_MENU_TYPES } from "Constants/System";
import EmptyFolder from "Containers/Desktop/Components/Windows/Components/EmptyFolder/EmptyFolder";
import { openFile } from "Utils/openFile";
import { BreadcrumbWrapper, FolderWindowWrapper, IconWrapper, PathWrapper } from "./FolderWindow.styled";
import type { FolderWindowProps } from "./FolderWindow.types";

const FolderWindow = ({
    window,
    targetFolderId,
    targetFolderHandle,
    renameFileId,
    setRenameFileId,
}: FolderWindowProps) => {
    const [currentFolderId, setCurrentFolderId] = useState(window.id);
    const [history, setHistory] = useState<string[]>([]);
    const [future, setFuture] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const openedWindowsLength = useAppSelector(selectOpenedWindowLength);
    const [path, setPath] = useState<string[]>([window.id]);
    const pathFolders = useAppSelector(state =>
        path
            .map(id => selectFolder(id)(state))
            .filter((f): f is FolderFile => Boolean(f)),
    );

    const folder = useAppSelector(selectFolder(currentFolderId));

    const handleOpenFile = (file: DesktopFile) => {
        if (file.type === FILE_TYPE.FOLDER) {
            setHistory(prev => [...prev, currentFolderId]);
            setFuture([]);
            setCurrentFolderId(file.id);
            setPath(prev => [...prev, file.id]);
            return;
        }

        openFile(file, dispatch, openedWindowsLength);
    };

    const goBack = () => {
        if (!history.length) return;
        const prev = history[history.length - 1];

        setHistory(h => h.slice(0, -1));
        setFuture(f => [currentFolderId, ...f]);
        setCurrentFolderId(prev);
        setPath(p => p.slice(0, -1));
    };

    const goForward = () => {
        if (!future.length) return;
        const next = future[0];

        setFuture(f => f.slice(1));
        setHistory(h => [...h, currentFolderId]);
        setCurrentFolderId(next);
        setPath(p => [...p, next]);
    };

    return (
        <WindowBasic zIndex={window.zIndex} title={window.title} id={window.id} kind={WINDOW_KIND.FOLDER}>
            <Box sx={{ display: "flex", alignItems: "center", gap: '20px', width: '100%' }}>
                <Box sx={{ display: 'flex' }}>
                    <IconWrapper onClick={goBack} isDisabled={history.length <= 0}/>
                    <IconWrapper onClick={goForward} isDisabled={future.length <= 0}/>
                </Box>
                <BreadcrumbWrapper>
                    {pathFolders.map((folder, index) => (
                        <PathWrapper
                            key={folder.id}
                            onClick={() => {
                                setCurrentFolderId(folder.id);
                                setPath(path.slice(0, index + 1));
                                setHistory(path.slice(0, index));
                                setFuture([]);
                            }}
                        >
                            {folder.name} /
                        </PathWrapper>
                    ))}
                </BreadcrumbWrapper>
            </Box>
            <FolderWindowWrapper
                data-file={FILE_TYPE.FOLDER}
                data-id={currentFolderId}
                data-name={window.title}
                data-context={CONTEXT_MENU_TYPES.FOLDER}
            >
                {(folder &&
                    'innerContent' in folder &&
                    Array.isArray(folder.innerContent) && folder.innerContent.length) ?
                    folder.innerContent.map(file => (
                        <DraggableFile
                            onOpen={handleOpenFile}
                            targetFolderHandle={targetFolderHandle}
                            targetFolderId={targetFolderId}
                            key={file.id}
                            file={file}
                            onContextMenu={() => {}}
                            isSelected={false}
                            renameFileId={renameFileId}
                            setRenameFileId={setRenameFileId}
                        />
                    )) : <EmptyFolder />}
            </FolderWindowWrapper>
        </WindowBasic>
    );
};

export default FolderWindow;
