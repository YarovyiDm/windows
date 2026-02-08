import React from "react";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { DraggableFile } from "Components/index";
import { FILE_TYPE, WINDOW_KIND } from "Types/Desktop";
import { useAppSelector } from "Store/index";
import { selectFolder } from "Store/selectors/Desktop";
import { CONTEXT_MENU_TYPES } from "Constants/System";
import EmptyFolder from "Containers/Desktop/Components/Windows/Components/EmptyFolder/EmptyFolder";
import { FolderWindowWrapper } from "./FolderWindow.styled";
import type { FolderWindowProps } from "./FolderWindow.types";

const FolderWindow = ({
    window,
    targetFolderId,
    targetFolderHandle,
    renameFileId,
    setRenameFileId,
}: FolderWindowProps) => {
    const folder = useAppSelector(selectFolder(window.id));

    return (
        <WindowBasic zIndex={window.zIndex} title={window.title} id={window.id} kind={WINDOW_KIND.FOLDER}>
            <FolderWindowWrapper
                data-file={FILE_TYPE.FOLDER}
                data-id={window.id}
                data-name={window.title}
                data-context={CONTEXT_MENU_TYPES.FOLDER}
            >
                {(folder &&
                    'innerContent' in folder &&
                    Array.isArray(folder.innerContent) && folder.innerContent.length) ?
                    folder.innerContent.map(file => (
                        <DraggableFile
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
