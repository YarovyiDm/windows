import { IProps } from "./MenuProvider.types";
import DesktopMenu from "Components/ContextMenu/components/DesktopMenu/DesktopMenu";
import FileMenu from "Components/ContextMenu/components/FileMenu/FileMenu";

const MenuProvider = ({ contextMenuPosition, setContextMenuVisible, clickedType, onDesktopFileSizeChange, targetId, setRenameFileId }: IProps)  => {
    if(!clickedType) { return null; }

    const MenuMap = {
        desktop:
            <DesktopMenu
                contextMenuPosition={contextMenuPosition}
                setContextMenuVisible={setContextMenuVisible}
                onDesktopFileSizeChange={onDesktopFileSizeChange}
                clickedType={clickedType}
            />,
        file: <FileMenu targetId={targetId} setRenameFileId={setRenameFileId}/>,
    };

    return (
        <>{MenuMap[clickedType as keyof typeof MenuMap]}</>
    );
};

export default MenuProvider;