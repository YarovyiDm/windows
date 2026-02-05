import React, { RefObject, useRef } from "react";
import { useAppDispatch, useAppSelector } from "Store";
import { useClickOutside } from "Hooks";
import { closeModal } from "Store/slices/TaskBar";
import { TaskBarModal } from "Types/TaskBar";
import { selectLanguageIndex } from "Store/selectors/System";
import { TaskBarWrapper } from "Containers/TaskBar/TaskBar.styled";
import Main from "Containers/TaskBar/Components/Main/Main";
import Weather from "Containers/TaskBar/Components/Weather/Weather";
import { TASKBAR_MODALS } from "Constants/Taskbar";
import { selectTopModal } from "Store/selectors/TaskBar";
import { SystemTray } from "Components/index";

const TaskBar = () => {
    const dispatch = useAppDispatch();
    const topModal = useAppSelector(selectTopModal);

    const modalRefs: Record<TaskBarModal, RefObject<HTMLDivElement>> = {
        [TASKBAR_MODALS.WINDOWS]: useRef(null),
        [TASKBAR_MODALS.POWER]: useRef(null),
        [TASKBAR_MODALS.LANGUAGES]: useRef(null),
        [TASKBAR_MODALS.HIDDEN_APPS]: useRef(null),
    };
    const languageIndex = useAppSelector(selectLanguageIndex);

    useClickOutside(
        topModal ? modalRefs[topModal] : null,
        () => dispatch(closeModal()),
    );

    return (
        <TaskBarWrapper>
            <Weather />
            <Main refs={modalRefs} />
            <SystemTray
                systemLanguageIndex={languageIndex}
                refs={modalRefs}
            />
        </TaskBarWrapper>
    );
};

export default TaskBar;
