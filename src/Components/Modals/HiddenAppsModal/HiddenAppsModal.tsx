import { HIDDEN_APPS } from "constants/desktop";
import { Icon } from "Components";
import { HiddenAppsItem, HiddenAppsModalWrapper } from "./HiddenAppsModal.styled";

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
