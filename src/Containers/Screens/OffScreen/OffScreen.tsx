import { ICONS } from "constants/icons";
import { useEffect, useState } from "react";
import { Typography } from '@mui/material';
import Icon from "Components/Icon/Icon";
import { NoSignal, OffScreenWrapper, PowerButtonWrapper } from "Containers/Screens/OffScreen/OffScreen.styled";
import type { OffScreenProps } from "./OffScreen.types";

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
                    <Typography sx={{ fontSize: "25px" }}>HDMI 1</Typography>
                    <Typography sx={{ fontSize: "18px" }}>No signal</Typography>
                </NoSignal>
            )}
            {(isStartScreen || isShutDownScreen) && (
                <PowerButtonWrapper
                    onClick={() => onSystemStart()}
                >
                    <Icon name={ICONS.POWER} />
                </PowerButtonWrapper>
            )}
        </OffScreenWrapper>
    );
};

export default OffScreen;
