import { Icon, File } from "Components";
import { Box, Typography } from '@mui/material';
import { POWER, SETTINGS, USER } from "Constants/System";
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
                        <File text='Налаштування' name={SETTINGS} />
                        {/*<File text='Калькулятор' name={CALCULATOR} />*/}
                        {/* Need to refactor */}
                    </Box>
                </Box>
                <Box sx={{ height: "50%", width: "100%" }}>In progress...</Box>
            </WindowsModalContentWrapper>
            <WindowsModalFooter>
                <WindowsModalFooterUserWrapper>
                    <WindowsModalFooterUserIconWrapper>
                        <Icon name={USER} />
                    </WindowsModalFooterUserIconWrapper>
                    <Typography sx={{ fontSize: '12px', marginLeft: '15px' }}>Beast</Typography>
                </WindowsModalFooterUserWrapper>
                <WindowsModalFooterPowerIconWrapper
                    onClick={onWindowsModalChange}
                >
                    {isPowerModalOpen && <PowerModal />}
                    <Icon name={POWER} />
                </WindowsModalFooterPowerIconWrapper>
            </WindowsModalFooter>
        </WindowsModalWrapper>
    );
};

export default WindowsModal;
