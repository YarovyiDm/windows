import DesktopMenu from "Components/ContextMenu/components/DesktopMenu/DesktopMenu";
import FileMenu from "Components/ContextMenu/components/FileMenu/FileMenu";
import type { MenuProviderProps } from "./MenuProvider.types";

const MenuProvider = ({ contextMenuPosition, setContextMenuVisible, clickedType, onDesktopFileSizeChange, targetId, setRenameFileId }: MenuProviderProps)  => {
    if(!clickedType) { return null; }

    const MenuMap = {
        desktop:
            <DesktopMenu
                contextMenuPosition={contextMenuPosition}
                setContextMenuVisible={setContextMenuVisible}
                onDesktopFileSizeChange={onDesktopFileSizeChange}
                // clickedType={clickedType}
            />,
        file: <FileMenu targetId={targetId} setRenameFileId={setRenameFileId}/>,
    };

    return (
        <>{MenuMap[clickedType as keyof typeof MenuMap]}</>
    );
};

export default MenuProvider;