import { useEffect, useState } from "react";
import { Box } from '@mui/material';
import { TRANSLATION_KEYS } from "Constants/Translation";
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
        <SystemQuitScreen type={TRANSLATION_KEYS.SHUT_DOWN} />,
        <OffScreen isShutDownScreen start={onIndexChange} />,
        <StartScreen />,
        <LockScreen />,
    ];

    useEffect(() => {
        if (currentIndex === 1) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, displayDuration);

        return () => clearInterval(interval);
    }, [currentIndex, screens.length]);

    return <Box>{screens[currentIndex]}</Box>;
};

export default ShutDownScenario;
