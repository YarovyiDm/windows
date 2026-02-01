import { v4 as uuid } from "uuid";
import { useRef } from "react";
import { FILE_TYPES } from "Constants/Desktop";
import useLanguage from "Hooks/useLanguage";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectFileSize } from "Store/selectors/System";
import { addDesktopFile } from "Store/slices/Desktop";
import FileSize from "Components/ContextMenu/components/FileSize/FileSize";
import { ICONS } from "Constants/System";
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
import type { CreateFilePayload, DesktopMenuProps } from "./DesktopMenu.types";

const  DesktopMenu = ({ contextMenuPosition, setContextMenuVisible, onDesktopFileSizeChange } : DesktopMenuProps) => {
    const selectedSize = useAppSelector(selectFileSize);
    const { translate } = useLanguage();
    const fileId = useRef(uuid()).current;
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
                    <IconStyled name={ICONS.VIEW_BOXES} />
                    <ItemTitle>
                        {translate("iconsView")}
                    </ItemTitle>
                </MenuItemMain>
                <ItemArrowIcon
                    name={ICONS.RIGHT_ARROW}
                />
                <FileSize selectedSize={selectedSize} onDesktopFileSizeChange={onDesktopFileSizeChange} />
            </MenuItem>
            <MenuItem>
                <MenuItemMain>
                    <IconStyled name={ICONS.PLUS_CIRCLE} />
                    <ItemTitle>
                        {translate("createNewFile")}
                    </ItemTitle>
                </MenuItemMain>
                <ItemArrowIcon
                    name={ICONS.RIGHT_ARROW}
                />
                <SubMenuWrapper className='submenu'>
                    <SubMenuItemMain
                        onClick={() => createNewFile({
                            name: translate("newFolder"),
                            type: FILE_TYPES.FOLDER,
                        })}
                    >
                        <IconWrapper>
                            <IconStyled name={ICONS.FOLDER} />
                        </IconWrapper>

                        <SubItemTitle>
                            {translate("folder")}
                        </SubItemTitle>
                    </SubMenuItemMain>
                    <SubMenuItemMain
                        onClick={() => createNewFile({
                            name: translate("newTextDocument"),
                            type: FILE_TYPES.TEXT_FILE,
                        })}
                    >
                        <IconWrapper>
                            <IconStyled name={ICONS.TEXT_FILE} />
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