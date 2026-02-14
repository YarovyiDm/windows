import { ICONS } from "constants/icons";
import { TASKBAR_MODALS } from "constants/taskBar";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectModalStack } from "store/selectors/taskBar";
import { openModal } from "store/slices/taskBar";
import { HiddenAppsModal } from "Components/Modals";
import { AppsIconWrapper, AppsWrapper } from "./Apps.styled";
import type { AppsProps } from "./Apps.types";

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