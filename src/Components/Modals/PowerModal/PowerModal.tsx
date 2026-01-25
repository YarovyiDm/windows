import React from "react";
import * as _ from "lodash";
import { POWER_MODAL_UNITS } from "Constants/System";

import { useAppDispatch } from "Store/index";
import { updateSystemScenario } from "Store/slices/System";
import {
    PowerModalItem,
    PowerModalItemContent,
    PowerModalItemIcon,
    PowerModalWrapper,
} from "Components/Modals/PowerModal/PowerModal.styled";

const PowerModal = () => {
    const dispatch = useAppDispatch();

    return (
        <PowerModalWrapper>
            {_.map(POWER_MODAL_UNITS, (unit, key) => {
                return (
                    <PowerModalItem
                        onClick={() =>
                            dispatch(updateSystemScenario(unit.scenario))
                        }
                    >
                        <PowerModalItemIcon name={key} />
                        <PowerModalItemContent>{unit.name}</PowerModalItemContent>
                    </PowerModalItem>
                );
            })}
        </PowerModalWrapper>
    );
};

export default PowerModal;
