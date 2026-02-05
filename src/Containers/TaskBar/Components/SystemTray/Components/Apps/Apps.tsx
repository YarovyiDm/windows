import { HiddenAppsModal } from "Components/Modals";
import { AppsProps } from "Containers/TaskBar/Components/SystemTray/Components/Apps/Apps.types";
import { AppsIconWrapper, AppsWrapper } from "Containers/TaskBar/Components/SystemTray/Components/Apps/Apps.styled";
import { ICONS } from "Constants/Icons";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectModalStack } from "Store/selectors/TaskBar";
import { TASKBAR_MODALS } from "Constants/Taskbar";
import { openModal } from "Store/slices/TaskBar";

const Apps = ({ refs }: AppsProps) => {
    const dispatch = useAppDispatch();
    const modalStack = useAppSelector(selectModalStack);
    const isOpened = modalStack.includes(TASKBAR_MODALS.HIDDEN_APPS);

    return (
        <AppsWrapper
            isOpened={isOpened}
            ref={refs[TASKBAR_MODALS.HIDDEN_APPS]}
            onClick={() => dispatch(openModal(TASKBAR_MODALS.HIDDEN_APPS))}
        >
            {isOpened && <HiddenAppsModal />}
            <AppsIconWrapper
                sx={{ width: "15px", height: "15px" }}
                isOpened={isOpened}
                name={ICONS.ARROW}
            />
        </AppsWrapper>
    );
};

export default Apps;