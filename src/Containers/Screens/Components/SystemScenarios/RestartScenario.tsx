import { useEffect, useState } from "react";
import { Box } from '@mui/material';
import LockScreen from "Containers/Screens/LockScreen/LockScreen";
import OffScreen from "Containers/Screens/OffScreen/OffScreen";
import SystemQuitScreen from "Containers/Screens/SystemQuitScreen/SystemQuitScreen";
import StartScreen from "Containers/Screens/StartScreen/StartScreen";

const RestartScenario = () => {
    const screens = [
        <SystemQuitScreen type='restart' />,
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
