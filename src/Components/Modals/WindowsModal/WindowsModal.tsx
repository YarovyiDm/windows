import { Icon, File } from "Components";
import { Box, Typography } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useAppDispatch, useAppSelector } from "Store/index";
import { ICONS } from "Constants/Icons";
import { FILE_TYPE, SettingsFile } from "Types/Desktop";
import { WINDOW_META } from "Constants/System";
import { useLanguage } from "Hooks/useLanguage";
import { TRANSLATION_KEYS } from "Constants/Translation";
import { PowerModal } from "Components/Modals";
import { openModal } from "Store/slices/TaskBar";
import { TASKBAR_MODALS } from "Constants/Taskbar";
import { selectModalStack } from "Store/selectors/TaskBar";
import { WindowsModalProps } from "Components/Modals/WindowsModal/WindowsModal.types";
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
    const isOpened = modalStack.includes(TASKBAR_MODALS.POWER);
    const { translate } = useLanguage();

    const settingsFile = {
        type: FILE_TYPE.SETTINGS,
        id: WINDOW_META.SETTINGS.id,
        name: WINDOW_META.SETTINGS.title,
        icon: ICONS.SETTINGS,
        isSelected: false,
        created_at: new Date().toISOString(),
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
                    isOpened={isOpened}
                    onClick={() => dispatch(openModal(TASKBAR_MODALS.POWER))}
                >
                    {isOpened && <PowerModal />}
                    <PowerSettingsNewIcon />
                </WindowsModalFooterPowerIconWrapper>
            </WindowsModalFooter>
        </WindowsModalWrapper>
    );
};

export default WindowsModal;
