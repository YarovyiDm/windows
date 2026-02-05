import DesktopMenu from "Components/ContextMenu/components/DesktopMenu/DesktopMenu";
import FileMenu from "Components/ContextMenu/components/FileMenu/FileMenu";
import { CONTEXT_MENU_TYPES } from "Constants/System";
import type { MenuProviderProps } from "./MenuProvider.types";

const MenuProvider = ({
    contextMenuPosition,
    setContextMenuVisible,
    clickedType,
    onDesktopFileSizeChange,
    targetId,
    setRenameFileId,
}: MenuProviderProps)  => {
    if(!clickedType) { return null; }

    const MenuMap = {
        [CONTEXT_MENU_TYPES.DESKTOP]:
            <DesktopMenu
                contextMenuPosition={contextMenuPosition}
                setContextMenuVisible={setContextMenuVisible}
                onDesktopFileSizeChange={onDesktopFileSizeChange}
            />,
        [CONTEXT_MENU_TYPES.FILE]: <FileMenu targetId={targetId} setRenameFileId={setRenameFileId} setContextMenuVisible={setContextMenuVisible}/>,
        [CONTEXT_MENU_TYPES.FOLDER]: <div>1</div>,
    };

    return (
        <>{MenuMap[clickedType as keyof typeof MenuMap]}</>
    );
};

export default MenuProvider;