import { ICONS } from "constants/icons";
import { TRANSLATION_KEYS } from "constants/translation";
import { DISK_TYPES, WINDOW_META } from "constants/system";
import { openFile } from "domain/desktop/mutations/openFile";
import { SETTINGS_TAB } from "constants/settings";
import { useLanguage } from "hooks";
import { Box } from '@mui/material';
import { FILE_TYPE, type SettingsFile } from "types/desktop";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectFileSize } from "store/selectors/system";
import FileSize from "Components/ContextMenu/Components/FileSize/FileSize";
import { useDesktopMenuActions } from "Components/ContextMenu/hooks/useDesktopMenuActions";
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

const DesktopMenu = ({
    contextMenuPosition,
    setContextMenuVisible,
    onDesktopFileSizeChange,
} : DesktopMenuProps) => {
    const selectedSize = useAppSelector(selectFileSize);
    const { translate } = useLanguage();

    const { createNewFile } = useDesktopMenuActions({ contextMenuPosition, setContextMenuVisible });
    const dispatch = useAppDispatch();

    const settingsFile = {
        type: FILE_TYPE.SETTINGS,
        id: WINDOW_META.SETTINGS.id,
        name: WINDOW_META.SETTINGS.title,
        icon: ICONS.SETTINGS,
        isSelected: false,
        created_at: new Date().toISOString(),
        diskId: DISK_TYPES.C,
        draggable: false,
        initialTab: SETTINGS_TAB.PERSONALIZATION,
    } satisfies SettingsFile;

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
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
            <MenuItem onClick={() => (
                openFile(settingsFile, dispatch, 10),
                setContextMenuVisible(false))
            }>
                <MenuItemMain>
                    <IconStyled name={ICONS.BRUSH} />
                    <ItemTitle>
                        {translate(TRANSLATION_KEYS.SETTINGS_WINDOW.PERSONALIZATION)}
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
        </Box>
    );
};

export default DesktopMenu;