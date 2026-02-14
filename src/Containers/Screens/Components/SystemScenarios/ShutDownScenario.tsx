import { TRANSLATION_KEYS } from "constants/translation";
import { useEffect, useState } from "react";
import { Box } from '@mui/material';
import OffScreen from "../../OffScreen/OffScreen";
import SystemQuitScreen from "../../SystemQuitScreen/SystemQuitScreen";
import StartScreen from "../../StartScreen/StartScreen";
import LockScreen from "../../LockScreen/LockScreen";

const ShutDownScenario = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayDuration = 4000;

    const onIndexChange = () => {
        setCurrentIndex(prev => prev + 1);
    };

    const screens = [
        <SystemQuitScreen type={TRANSLATION_KEYS.SHUT_DOWN_TITLE} />,
        <OffScreen isShutDownScreen start={onIndexChange} />,
        <StartScreen />,
        <LockScreen />,
    ];

    useEffect(() => {
        if (currentIndex === 1) return;

        if (currentIndex >= screens.length - 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
        }, displayDuration);

        return () => clearInterval(interval);
    }, [currentIndex, screens.length]);

    return <Box>{screens[currentIndex]}</Box>;
};

export default ShutDownScenario;
