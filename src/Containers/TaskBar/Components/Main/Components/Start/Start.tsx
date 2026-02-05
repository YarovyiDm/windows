import React from "react";
import { Icon } from "Components/index";
import WindowsModal from "Components/Modals/WindowsModal/WindowsModal";
import { ICONS } from "Constants/Icons";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectModalStack } from "Store/selectors/TaskBar";
import { TASKBAR_MODALS } from "Constants/Taskbar";
import { openModal } from "Store/slices/TaskBar";
import { StartProps } from "./Start.types";
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