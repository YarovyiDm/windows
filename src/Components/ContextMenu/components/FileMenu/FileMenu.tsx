import { EDIT, STASH } from "Constants/System";
import { IconStyled,ItemTitle, MenuItem, MenuItemMain } from "../../ContextMenu.styled";
import type { FileMenuProps } from "./FileMenu.types";

const FileMenu = ({ targetId, setRenameFileId }: FileMenuProps) => {
    return (
        <>
            <MenuItem>
                <MenuItemMain onClick={() => {targetId && setRenameFileId(targetId);}}>
                    <IconStyled name={EDIT} />
                    <ItemTitle>
                        Перейменувати
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
            <MenuItem>
                <MenuItemMain>
                    <IconStyled name={STASH} />
                    <ItemTitle>
                        Видалити
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
            <MenuItem>
                <MenuItemMain>
                    <IconStyled name={STASH}  />
                    <ItemTitle>
                        Властивості
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
        </>
    );
};

export default FileMenu;