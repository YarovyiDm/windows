import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { useAppSelector } from "Store/index";
import { selectFolder } from "Store/selectors/Desktop";
import { DraggableFile } from "Components/index";
import { FolderWindowWrapper } from "Containers/Desktop/Components/Windows/FolderWindow/FolderWindow.styled";
import { WINDOW_TYPES } from "Constants/System";
import type { FolderWindowProps } from "./FolderWindow.types";

const FolderWindow = ({ name, id, renameFileId, selectedFiles, setIsSelecting, onContextMenu, setRenameFileId }: FolderWindowProps) => {
    const folder = useAppSelector(selectFolder(id));

    return (
        <WindowBasic name={name} id={id} type={WINDOW_TYPES.FOLDER}>
            <FolderWindowWrapper
                data-file='folder'
                data-id={id}
                data-name={name}
            >
                {folder &&
                    Array.isArray(folder.innerContent) &&
                    folder.innerContent.map(item => {
                        return (<DraggableFile
                            renameFileId={renameFileId}
                            key={item.id}
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
                    })}
            </FolderWindowWrapper>
        </WindowBasic>
    );
};

export default FolderWindow;
