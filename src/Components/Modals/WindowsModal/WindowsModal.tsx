import { Icon, File } from "Components";
import { Box, Typography } from '@mui/material';
import { handleCloseAllModals, toggleModal } from "Store/slices/TaskPanelSlice";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectPowerModalState } from "Store/selectors/TaskPanel";
import { ICONS } from "Constants/Icons";
import { FILE_TYPE, SettingsFile } from "Types/Desktop";
import PowerModal from "../PowerModal/PowerModal";
import {
    WindowsModalContentHeader,
    WindowsModalContentWrapper,
    WindowsModalFooter,
    WindowsModalFooterPowerIconWrapper,
    WindowsModalFooterUserIconWrapper,
    WindowsModalFooterUserWrapper,
    WindowsModalWrapper,
} from "./WindowsModal.styled";

const WindowsModal = () => {
    const dispatch = useAppDispatch();
    const isPowerModalOpen = useAppSelector(selectPowerModalState);

    const onWindowsModalChange = () => {
        dispatch(handleCloseAllModals());
        dispatch(toggleModal({ modalName: "isPowerModalOpen" }));
    };

    const settingsFile = {
        type: FILE_TYPE.SETTINGS,
        id: "Settings",
        name: "Settings",
        icon: ICONS.SETTINGS,
        isSelected: false,
    } satisfies SettingsFile;

    return (
        <WindowsModalWrapper
            onClick={e => e.stopPropagation()}
        >
            <WindowsModalContentWrapper>
                <Box sx={{ height: "50%", width: "100%" }}>
                    <WindowsModalContentHeader>Закріплено</WindowsModalContentHeader>
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
                    onClick={onWindowsModalChange}
                >
                    {isPowerModalOpen && <PowerModal />}
                    <Icon name={ICONS.POWER} />
                </WindowsModalFooterPowerIconWrapper>
            </WindowsModalFooter>
        </WindowsModalWrapper>
    );
};

export default WindowsModal;
