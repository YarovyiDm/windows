import useLanguage from "Hooks/useLanguage";
import { useAppSelector } from "Store/index";
import { selectFileSize } from "Store/selectors/System";
import FileSize from "Components/ContextMenu/components/FileSize/FileSize";
import { ICONS } from "Constants/Icons";
import { FILE_TYPE } from "Types/Desktop";
import { useDesktopMenuActions } from "Components/ContextMenu/Hooks/useDesktopMenuActions";
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
import type { DesktopMenuProps } from "./DesktopMenu.types";

const  DesktopMenu = ({
    contextMenuPosition,
    setContextMenuVisible,
    onDesktopFileSizeChange,
} : DesktopMenuProps) => {
    const selectedSize = useAppSelector(selectFileSize);
    const { translate } = useLanguage();

    const { createNewFile } = useDesktopMenuActions({ contextMenuPosition, setContextMenuVisible });

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
                            type: FILE_TYPE.FOLDER,
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
                            type: FILE_TYPE.TEXT,
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