import { TRANSLATION_KEYS } from "constants/translation";
import { useEffect, useState } from "react";
import { Box } from '@mui/material';
import OffScreen from "../../OffScreen/OffScreen";
import SystemQuitScreen from "../../SystemQuitScreen/SystemQuitScreen";
import StartScreen from "../../StartScreen/StartScreen";
import LockScreen from "../../LockScreen/LockScreen";

const RestartScenario = () => {
    const screens = [
        <SystemQuitScreen type={TRANSLATION_KEYS.RESTART_TITLE} />,
        <OffScreen />,
        <StartScreen />,
        <LockScreen />,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayDuration = 4000;

    useEffect(() => {
        if (currentIndex === screens.length - 1) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, displayDuration);

        return () => clearInterval(interval);
    }, [currentIndex, screens.length]);

    return <Box>{screens[currentIndex]}</Box>;
};

export default RestartScenario;
