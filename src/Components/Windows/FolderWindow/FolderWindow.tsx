import React, { Dispatch, SetStateAction } from "react";
import WindowBasic from "Components/Windows/WindowBasic/WindowBasic";

import styles from "./FolderWindow.module.scss";
import { useAppSelector } from "Store/index";
import { selectFolder } from "Store/selectors/Desktop";
import { DraggableFile } from "Components/index";

const FolderWindow = ({ name, id, renameFileId, selectedFiles, setIsSelecting, onContextMenu, setRenameFileId }: {setRenameFileId: Dispatch<SetStateAction<string>>, selectedFiles: string[], onContextMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void, name: string; id: string, renameFileId: string, setIsSelecting: (isSelecting: boolean) => void; }) => {
    const folder = useAppSelector(selectFolder(id));

    return (
        <WindowBasic name={name} id={id}>
            <div
                data-file='folder'
                data-id={id}
                data-name={name}
                className={styles.folder}
            >
                {folder &&
                    Array.isArray(folder.innerContent) &&
                    folder.innerContent.map(item => {
                        return (<DraggableFile
                            renameFileId={renameFileId}
                            key={item.name}
                            size={item.size}
                            name={item.name}
                            icon={item.icon}
                            position={{ x: 50, y: 50 }}
                            isOpened={item.isOpened}
                            innerContent={item.innerContent}
                            setIsSelecting={setIsSelecting}
                            isSelected={selectedFiles.includes(name)}
                            onContextMenu={onContextMenu}
                            id={id}
                            type={item.type}
                            setRenameFileId={setRenameFileId}
                        />);

                        // <div>{item.name}+{item.size} bytes</div>;
                    })}
            </div>
        </WindowBasic>
    );
};

export default FolderWindow;
