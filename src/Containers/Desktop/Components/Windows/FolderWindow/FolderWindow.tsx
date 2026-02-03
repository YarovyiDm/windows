import React from "react";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { DraggableFile } from "Components/index";
import { FolderWindowWrapper } from "Containers/Desktop/Components/Windows/FolderWindow/FolderWindow.styled";
import { FILE_TYPE, WINDOW_KIND } from "Types/Desktop";
import { useAppSelector } from "Store/index";
import { selectFolder } from "Store/selectors/Desktop";
import type { FolderWindowProps } from "./FolderWindow.types";

const FolderWindow = ({ window, targetFolderId, targetFolderHandle }: FolderWindowProps) => {
    const folder = useAppSelector(selectFolder(window.id));

    return (
        <WindowBasic title={window.title} id={window.id} kind={WINDOW_KIND.FOLDER}>
            <FolderWindowWrapper
                data-file={FILE_TYPE.FOLDER}
                data-id={window.id}
                data-name={window.title}
            >
                {folder &&
                    'innerContent' in folder &&
                    Array.isArray(folder.innerContent) &&
                    folder.innerContent.map(file => (
                        <DraggableFile
                            targetFolderHandle={targetFolderHandle}
                            targetFolderId={targetFolderId}
                            key={file.id}
                            file={file}
                            setIsSelecting={() => {}}
                            onContextMenu={() => {}}
                            isSelected={false}
                            renameFileId=''
                            setRenameFileId={() => {}}
                        />
                    ))}
            </FolderWindowWrapper>
        </WindowBasic>
    );
};

export default FolderWindow;
