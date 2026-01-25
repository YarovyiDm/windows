import { PLUS_CIRCLE, RIGHT_ARROW, TEXT_FILE, VIEW_BOXES } from "Constants/System";
import FileSize from "Components/ContextMenu/components/FileSize/FileSize";
import { FOLDER } from "Constants/Desktop";
import useLanguage from "Hooks/useLanguage";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectFileSize } from "Store/selectors/System";
import { addDesktopFile } from "Store/slices/Desktop";
import { useId } from "react";
import { CreateFilePayload, DesktopMenuProps } from "./DesktopMenu.types";
import {
    IconStyled,
    IconWrapper, ItemArrowIcon,
    ItemTitle,
    MenuItem,
    MenuItemMain,
    SubItemTitle,
    SubMenuItemMain,
    SubMenuWrapper,
} from "../../ContextMenu.styled";

const DesktopMenu = ({ contextMenuPosition, setContextMenuVisible, onDesktopFileSizeChange } : DesktopMenuProps) => {
    const selectedSize = useAppSelector(selectFileSize);
    const { translate } = useLanguage();
    const fileId = useId();
    const dispatch = useAppDispatch();

    const createNewFile =
        ({ name, type }: CreateFilePayload) => {
            const newFile = {
                name: name + `_${contextMenuPosition.x}`,
                icon: type,
                position: contextMenuPosition,
                isSelected: false,
                isOpened: false,
                id: fileId,
                type,
                innerContent: [],
                size: 1,
            };

            dispatch(addDesktopFile(newFile));
            setContextMenuVisible(false);
        };

    return (
        <>
            <MenuItem>
                <MenuItemMain>
                    <IconStyled name={VIEW_BOXES} />
                    <ItemTitle>
                        {translate("iconsView")}
                    </ItemTitle>
                </MenuItemMain>
                <ItemArrowIcon
                    name={RIGHT_ARROW}
                />
                <FileSize selectedSize={selectedSize} onDesktopFileSizeChange={onDesktopFileSizeChange} />
            </MenuItem>
            <MenuItem>
                <MenuItemMain>
                    <IconStyled name={PLUS_CIRCLE} />
                    <ItemTitle>
                        {translate("createNewFile")}
                    </ItemTitle>
                </MenuItemMain>
                <ItemArrowIcon
                    name={RIGHT_ARROW}
                />
                <SubMenuWrapper className='submenu'>
                    <SubMenuItemMain
                        onClick={() => createNewFile({
                            name: translate("newFolder"),
                            type: FOLDER,
                        })}
                    >
                        <IconWrapper>
                            <IconStyled name={FOLDER} />
                        </IconWrapper>

                        <SubItemTitle>
                            {translate("folder")}
                        </SubItemTitle>
                    </SubMenuItemMain>
                    <SubMenuItemMain
                        onClick={() => createNewFile({
                            name: translate("newTextDocument"),
                            type: TEXT_FILE,
                        })}
                    >
                        <IconWrapper>
                            <IconStyled name={TEXT_FILE} />
                        </IconWrapper>
                        <SubItemTitle>
                            {translate("textDocument")}
                        </SubItemTitle>
                    </SubMenuItemMain>
                </SubMenuWrapper>
            </MenuItem>
        </>
    );
};

export default DesktopMenu;