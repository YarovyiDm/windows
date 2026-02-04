import { ICONS } from "Constants/Icons";
import { useDesktopMenuActions } from "Components/ContextMenu/Hooks/useDesktopMenuActions";
import { IconStyled,ItemTitle, MenuItem, MenuItemMain } from "../../ContextMenu.styled";
import type { FileMenuProps } from "./FileMenu.types";

const FileMenu = ({
    targetId,
    setRenameFileId,
}: FileMenuProps) => {
    const { deleteFile, renameFile } = useDesktopMenuActions({ setRenameFileId });

    if(!targetId){ return null; }

    return (
        <>
            <MenuItem>
                <MenuItemMain onClick={() => {renameFile(targetId);}}>
                    <IconStyled name={ICONS.EDIT} />
                    <ItemTitle>
                        Перейменувати
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
            <MenuItem>
                <MenuItemMain onClick={() => {deleteFile(targetId);}}>
                    <IconStyled name={ICONS.STASH} />
                    <ItemTitle>
                        Видалити
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
        </>
    );
};

export default FileMenu;