import { TASKBAR_MODALS } from "constants/taskBar";
import { type RefObject, useRef } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { useClickOutside } from "hooks";
import { closeModal } from "store/slices/taskBar";
import { selectLanguageIndex } from "store/selectors/system";
import { selectTopModal } from "store/selectors/taskBar";
import { TaskBarWrapper } from "Containers/TaskBar/TaskBar.styled";
import Main from "Containers/TaskBar/Components/Main/Main";
import Weather from "Containers/TaskBar/Components/Weather/Weather";
import { SystemTray } from "Components/index";
import type { TaskBarModal } from "types/taskBar";

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
