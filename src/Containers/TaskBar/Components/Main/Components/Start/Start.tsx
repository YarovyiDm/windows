import React from "react";
import { Icon } from "Components/index";
import WindowsModal from "Components/Modals/WindowsModal/WindowsModal";
import { StartProps } from "Containers/TaskBar/Components/Main/Components/Start/Start.types";
import { StartWrapper } from "Containers/TaskBar/Components/Main/Components/Start/Start.styled";
import { ICONS } from "Constants/Icons";

const Start = ({ refs, handleModalChange, isWindowsModalOpen }: StartProps) => {
    return (
        <StartWrapper
            isOpened={isWindowsModalOpen}
            ref={refs.isWindowsModalOpen}
            onClick={() => handleModalChange("isWindowsModalOpen")}
        >
            <Icon name={ICONS.WINDOWS} style={{ width: "30px", height: "30px", cursor: "pointer" }} />
            {isWindowsModalOpen && <WindowsModal />}
        </StartWrapper>
    );
};

export default Start;