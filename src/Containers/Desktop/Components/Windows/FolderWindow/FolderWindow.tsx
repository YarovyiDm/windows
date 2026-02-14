import { openFile } from "domain/desktop/mutations/openFile";
import { CONTEXT_MENU_TYPES } from "constants/system";
import { useState } from "react";
import { type DesktopFile, FILE_TYPE, WINDOW_KIND } from "types/desktop";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectFolder, selectOpenedWindowLength } from "store/selectors/desktop";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { DraggableFile } from "Components/index";
import EmptyFolder from "Containers/Desktop/Components/Windows/Components/EmptyFolder/EmptyFolder";
import Breadcrumbs from "Containers/Desktop/Components/Windows/FolderWindow/Components/Breadcrumbs/Breadcrumbs";
import { FolderWindowWrapper } from "./FolderWindow.styled";
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

    return (
        <WindowBasic zIndex={window.zIndex} title={window.title} id={window.id} kind={WINDOW_KIND.FOLDER}>
            <Breadcrumbs
                path={path}
                future={future}
                history={history}
                currentFolderId={currentFolderId}
                setHistory={setHistory}
                setFuture={setFuture}
                setCurrentFolderId={setCurrentFolderId}
                setPath={setPath}
            />
            <FolderWindowWrapper
                data-file={FILE_TYPE.FOLDER}
                data-id={currentFolderId}
                data-name={window.title}
                data-context={CONTEXT_MENU_TYPES.FOLDER}
            >`
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
