import React, { useRef, useState } from "react";
import {
    SystemTray,
} from "Components";
import { useAppDispatch, useAppSelector } from "Store";
import { useClickOutside } from "Hooks";
import { handleCloseAllModals, toggleModal } from "Store/slices/TaskPanelSlice";
import { ModalNames, ObjectOfModalRefs } from "Types/TaskPanelTypes";
import { selectLanguageIndex } from "Store/selectors/System";
import { TaskBarWrapper } from "Containers/TaskBar/TaskBar.styled";
import Main from "Containers/TaskBar/Components/Main/Main";
import Weather from "Containers/TaskBar/Components/Weather/Weather";

const TaskBar = () => {
    const dispatch = useAppDispatch();
    const [currentModal, setCurrentModal] = useState<string>("");

    const refs: ObjectOfModalRefs = {
        isWindowsModalOpen: useRef(null),
        isHiddenAppsModalOpen: useRef(null),
        isLanguagesModalOpen: useRef(null),
    };

    const { isHiddenAppsModalOpen, isLanguagesModalOpen } = useAppSelector(
        (state) => state.taskPanel,
    );

    const languageIndex = useAppSelector(selectLanguageIndex);

    useClickOutside(refs[currentModal as keyof typeof refs], () => {
        dispatch(handleCloseAllModals());
    });

    const handleModalChange = (name: ModalNames) => {
        setCurrentModal(name);
        dispatch(toggleModal({ modalName: name }));
    };

    return (
        <TaskBarWrapper>
            <Weather />
            <Main refs={refs} setCurrentModal={setCurrentModal} />
            <SystemTray
                hiddenAppsModalOpen={isHiddenAppsModalOpen}
                isLanguagesModalOpen={isLanguagesModalOpen}
                handleModalChange={handleModalChange}
                systemLanguageIndex={languageIndex}
                refs={refs}
            />
        </TaskBarWrapper>
    );
};

export default TaskBar;
