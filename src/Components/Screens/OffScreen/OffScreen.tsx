import React, { useEffect, useState } from "react";

import Icon from "Components/Icon/Icon";
import { POWER } from "Constants/System";
import { OffScreenProps } from "./OffScreen.types";
import { Typography } from '@mui/material';
import { NoSignal, OffScreenWrapper, PowerButtonWrapper } from "Components/Screens/OffScreen/OffScreen.styled";

const OffScreen = ({ isStartScreen, start, isShutDownScreen }: OffScreenProps) => {
    const [isMessageShow, setIsMessageShow] = useState(false);
    const [executionCount, setExecutionCount] = useState(0);

    useEffect(() => {
        if (executionCount >= 2 || isStartScreen) return;

        const timer = setTimeout(() => {
            setIsMessageShow(prev => !prev);
            setExecutionCount(prev => prev + 1);
        }, 1500);

        return () => clearTimeout(timer);
    }, [isMessageShow, isStartScreen, executionCount]);

    const onSystemStart = () => {
        start && start();
    };

    return (
        <OffScreenWrapper>
            {isMessageShow && (
                <NoSignal>
                    <Typography style={{ fontSize: "25px" }}>HDMI 1</Typography>
                    <Typography style={{ fontSize: "18px" }}>No signal</Typography>
                </NoSignal>
            )}
            {(isStartScreen || isShutDownScreen) && (
                <PowerButtonWrapper
                    onClick={() => onSystemStart()}
                >
                    <Icon name={POWER} />
                </PowerButtonWrapper>
            )}
        </OffScreenWrapper>
    );
};

export default OffScreen;
