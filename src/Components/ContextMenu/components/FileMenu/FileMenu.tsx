import { ICONS } from "Constants/Icons";
import { useDesktopMenuActions } from "Components/ContextMenu/Hooks/useDesktopMenuActions";
import { useLanguage } from "Hooks/useLanguage";
import { TRANSLATION_KEYS } from "Constants/Translation";
import { IconStyled,ItemTitle, MenuItem, MenuItemMain } from "../../ContextMenu.styled";
import type { FileMenuProps } from "./FileMenu.types";

const FileMenu = ({
    targetId,
    setRenameFileId,
    setContextMenuVisible,
}: FileMenuProps) => {
    const { deleteFile, renameFile } = useDesktopMenuActions({ setRenameFileId, setContextMenuVisible });
    const { translate } = useLanguage();

    if(!targetId){ return null; }

    return (
        <>
            <MenuItem>
                <MenuItemMain onClick={() => {renameFile(targetId);}}>
                    <IconStyled name={ICONS.EDIT} />
                    <ItemTitle>
                        {translate(TRANSLATION_KEYS.CHANGE_NAME)}
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
            <MenuItem>
                <MenuItemMain onClick={() => {deleteFile(targetId);}}>
                    <IconStyled name={ICONS.STASH} />
                    <ItemTitle>
                        {translate(TRANSLATION_KEYS.DELETE)}
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
        </>
    );
};

export default FileMenu;