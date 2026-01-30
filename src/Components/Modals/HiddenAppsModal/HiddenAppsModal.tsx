import { Icon } from "Components";
import { HIDDEN_APPS } from "Constants/TaskPanel";
import { HiddenAppsItem, HiddenAppsModalWrapper } from "Components/Modals/HiddenAppsModal/HiddenAppsModal.styled";

const HiddenAppsModal = () => {
    return (
        <HiddenAppsModalWrapper onClick={(e) => e.stopPropagation()}>
            {HIDDEN_APPS.map(appName => {
                return (
                    <HiddenAppsItem key={appName}>
                        <Icon name={appName} style={{ width: "18px", height: "18px" }} />
                    </HiddenAppsItem>
                );
            })}
        </HiddenAppsModalWrapper>
    );
};

export default HiddenAppsModal;
