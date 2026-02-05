import React from "react";
import { Icon } from "Components/index";
import WindowsModal from "Components/Modals/WindowsModal/WindowsModal";
import { ICONS } from "Constants/Icons";
import { StartProps } from "./Start.types";
import { StartWrapper } from "./Start.styled";

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