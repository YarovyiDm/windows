import { ICONS } from "constants/icons";
import { TASKBAR_MODALS } from "constants/taskBar";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectModalStack } from "store/selectors/taskBar";
import { openModal } from "store/slices/taskBar";
import { Icon } from "Components/index";
import WindowsModal from "Components/Modals/WindowsModal/WindowsModal";
import { type StartProps } from "./Start.types";
import { StartWrapper } from "./Start.styled";

const Start = ({ refs }: StartProps) => {
    const dispatch = useAppDispatch();
    const modalStack = useAppSelector(selectModalStack);
    const isOpened = modalStack.includes(TASKBAR_MODALS.WINDOWS);

    return (
        <StartWrapper
            isOpened={isOpened}
            ref={refs[TASKBAR_MODALS.WINDOWS]}
            onClick={() => dispatch(openModal(TASKBAR_MODALS.WINDOWS))}
        >
            <Icon name={ICONS.WINDOWS} style={{ width: "30px", height: "30px", cursor: "pointer" }} />
            {isOpened && <WindowsModal refs={refs} />}
        </StartWrapper>
    );
};

export default Start;