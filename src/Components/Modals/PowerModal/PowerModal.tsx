import { POWER_MODAL_UNITS } from "constants/system";
import * as _ from "lodash";
import { useAppDispatch } from "store/index";
import { updateSystemScenario } from "store/slices/system";
import { useLanguage } from "hooks/useLanguage";
import {
    PowerModalItem,
    PowerModalItemContent,
    PowerModalWrapper,
} from "./PowerModal.styled";

const PowerModal = () => {
    const dispatch = useAppDispatch();
    const { translate } = useLanguage();

    return (
        <PowerModalWrapper onClick={e => e.stopPropagation()}>
            {_.map(POWER_MODAL_UNITS, (unit, key) => {
                return (
                    <PowerModalItem
                        key={key}
                        onClick={() =>
                            dispatch(updateSystemScenario(unit.scenario))
                        }
                    >
                        {unit.icon}
                        <PowerModalItemContent>{translate(unit.title)}</PowerModalItemContent>
                    </PowerModalItem>
                );
            })}
        </PowerModalWrapper>
    );
};

export default PowerModal;
