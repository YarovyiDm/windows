import { useDispatch } from "react-redux";
import { removeFile } from "Store/slices/Desktop";
import { ICONS } from "Constants/System";
import { IconStyled,ItemTitle, MenuItem, MenuItemMain } from "../../ContextMenu.styled";
import type { FileMenuProps } from "./FileMenu.types";

const FileMenu = ({ targetId, setRenameFileId }: FileMenuProps) => {
    const dispatch = useDispatch();

    if(!targetId){ return null; }

    return (
        <>
            <MenuItem>
                <MenuItemMain onClick={() => {setRenameFileId(targetId);}}>
                    <IconStyled name={ICONS.EDIT} />
                    <ItemTitle>
                        Перейменувати
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
            <MenuItem>
                <MenuItemMain onClick={() => {dispatch(removeFile(targetId));}}>
                    <IconStyled name={ICONS.STASH} />
                    <ItemTitle>
                        Видалити
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
            {/*<MenuItem>*/}
            {/*    <MenuItemMain>*/}
            {/*        <IconStyled name={STASH}  />*/}
            {/*        <ItemTitle>*/}
            {/*            Властивості*/}
            {/*        </ItemTitle>*/}
            {/*    </MenuItemMain>*/}
            {/*</MenuItem>*/}
        </>
    );
};

export default FileMenu;