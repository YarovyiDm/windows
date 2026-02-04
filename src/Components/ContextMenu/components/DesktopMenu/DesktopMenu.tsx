import { useLanguage } from "Hooks";
import { useAppSelector } from "Store/index";
import { selectFileSize } from "Store/selectors/System";
import FileSize from "Components/ContextMenu/components/FileSize/FileSize";
import { ICONS } from "Constants/Icons";
import { FILE_TYPE } from "Types/Desktop";
import { useDesktopMenuActions } from "Components/ContextMenu/Hooks/useDesktopMenuActions";
import { TRANSLATION_KEYS } from "Constants/Translation";
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
                        {translate(TRANSLATION_KEYS.ICONS_VIEW)}
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
                        {translate(TRANSLATION_KEYS.CREATE)}
                    </ItemTitle>
                </MenuItemMain>
                <ItemArrowIcon
                    name={ICONS.RIGHT_ARROW}
                />
                <SubMenuWrapper className='submenu'>
                    <SubMenuItemMain
                        onClick={() => createNewFile({
                            name: translate(TRANSLATION_KEYS.NEW_FOLDER),
                            type: FILE_TYPE.FOLDER,
                        })}
                    >
                        <IconWrapper>
                            <IconStyled name={ICONS.FOLDER} />
                        </IconWrapper>

                        <SubItemTitle>
                            {translate(TRANSLATION_KEYS.FOLDER)}
                        </SubItemTitle>
                    </SubMenuItemMain>
                    <SubMenuItemMain
                        onClick={() => createNewFile({
                            name: translate(TRANSLATION_KEYS.NEW_TEXT_DOCUMENT),
                            type: FILE_TYPE.TEXT,
                        })}
                    >
                        <IconWrapper>
                            <IconStyled name={ICONS.TEXT_FILE} />
                        </IconWrapper>
                        <SubItemTitle>
                            {translate(TRANSLATION_KEYS.TEXT_DOCUMENT)}
                        </SubItemTitle>
                    </SubMenuItemMain>
                </SubMenuWrapper>
            </MenuItem>
        </>
    );
};

export default DesktopMenu;