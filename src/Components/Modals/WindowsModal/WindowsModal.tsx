import { ICONS } from "constants/icons";
import { TRANSLATION_KEYS } from "constants/translation";
import { TASKBAR_MODALS } from "constants/taskBar";
import { DISK_TYPES, WINDOW_META } from "constants/system";
import { Icon, File } from "Components";
import { Box, Typography } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { FILE_TYPE, type SettingsFile } from "types/desktop";
import { useAppDispatch, useAppSelector } from "store/index";
import { openModal } from "store/slices/taskBar";
import { selectModalStack } from "store/selectors/taskBar";
import { useLanguage } from "hooks/useLanguage";
import { PowerModal } from "Components/Modals";
import type { WindowsModalProps } from "Components/Modals/WindowsModal/WindowsModal.types";
import {
    WindowsModalContentHeader,
    WindowsModalContentWrapper,
    WindowsModalFooter,
    WindowsModalFooterPowerIconWrapper,
    WindowsModalFooterUserIconWrapper,
    WindowsModalFooterUserWrapper,
    WindowsModalWrapper,
} from "./WindowsModal.styled";

const WindowsModal = ({ refs }: WindowsModalProps) => {
    const dispatch = useAppDispatch();
    const modalStack = useAppSelector(selectModalStack);
    const isPowerOpened = modalStack.includes(TASKBAR_MODALS.POWER);
    const { translate } = useLanguage();

    const settingsFile = {
        type: FILE_TYPE.SETTINGS,
        id: WINDOW_META.SETTINGS.id,
        name: WINDOW_META.SETTINGS.title,
        icon: ICONS.SETTINGS,
        isSelected: false,
        created_at: new Date().toISOString(),
        diskId: DISK_TYPES.C,
    } satisfies SettingsFile;

    return (
        <WindowsModalWrapper
            onClick={e => e.stopPropagation()}
        >
            <WindowsModalContentWrapper>
                <Box sx={{ height: "50%", width: "100%" }}>
                    <WindowsModalContentHeader>{translate(TRANSLATION_KEYS.PINNED)}</WindowsModalContentHeader>
                    <Box sx={{ display: "flex" }}>
                        <File file={settingsFile} />
                    </Box>
                </Box>
                <Box sx={{ height: "50%", width: "100%", color: "white" }}>In progress...</Box>
            </WindowsModalContentWrapper>
            <WindowsModalFooter>
                <WindowsModalFooterUserWrapper>
                    <WindowsModalFooterUserIconWrapper>
                        <Icon name={ICONS.USER} />
                    </WindowsModalFooterUserIconWrapper>
                    <Typography sx={{ fontSize: '12px', marginLeft: '15px' }}>Beast</Typography>
                </WindowsModalFooterUserWrapper>
                <WindowsModalFooterPowerIconWrapper
                    ref={refs[TASKBAR_MODALS.POWER]}
                    isOpened={isPowerOpened}
                    onClick={() => dispatch(openModal(TASKBAR_MODALS.POWER))}
                >
                    {isPowerOpened && <PowerModal />}
                    <PowerSettingsNewIcon />
                </WindowsModalFooterPowerIconWrapper>
            </WindowsModalFooter>
        </WindowsModalWrapper>
    );
};

export default WindowsModal;
