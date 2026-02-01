import { Icon, File } from "Components";
import { Box, Typography } from '@mui/material';
import { toggleModal } from "Store/slices/TaskPanelSlice";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectPowerModalState } from "Store/selectors/TaskPanel";
import {
    WindowsModalContentHeader,
    WindowsModalContentWrapper,
    WindowsModalFooter,
    WindowsModalFooterPowerIconWrapper, WindowsModalFooterUserIconWrapper, WindowsModalFooterUserWrapper,
    WindowsModalWrapper,
} from "Components/Modals/WindowsModal/WindowsModal.styled";
import { ICONS } from "Constants/System";
import PowerModal from "../PowerModal/PowerModal";

const WindowsModal = () => {
    const dispatch = useAppDispatch();
    const isPowerModalOpen = useAppSelector(selectPowerModalState);

    const onWindowsModalChange = () => {
        dispatch(toggleModal({ modalName: "isPowerModalOpen" }));
    };

    return (
        <WindowsModalWrapper
            onClick={e => e.stopPropagation()}
        >
            <WindowsModalContentWrapper>
                <Box sx={{ height: "50%", width: "100%" }}>
                    <WindowsModalContentHeader>Закріплено</WindowsModalContentHeader>
                    <Box sx={{ display: "flex" }}>
                        <File text='Налаштування' name={ICONS.SETTINGS} />
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
