import { HiddenAppsModal } from "Components/Modals";
import { AppsProps } from "Containers/TaskBar/Components/SystemTray/Components/Apps/Apps.types";
import { AppsIconWrapper, AppsWrapper } from "Containers/TaskBar/Components/SystemTray/Components/Apps/Apps.styled";
import { ICONS } from "Constants/Icons";

const Apps = ({ refs, hiddenAppsModalOpen, handleModalChange }: AppsProps) => {
    return (
        <AppsWrapper
            isOpened={hiddenAppsModalOpen}
            ref={refs.isHiddenAppsModalOpen}
            onClick={() => handleModalChange("isHiddenAppsModalOpen")}
        >
            {hiddenAppsModalOpen && <HiddenAppsModal />}
            <AppsIconWrapper
                sx={{ width: "15px", height: "15px" }}
                isOpened={hiddenAppsModalOpen}
                name={ICONS.ARROW}
            />
        </AppsWrapper>
    );
};

export default Apps;