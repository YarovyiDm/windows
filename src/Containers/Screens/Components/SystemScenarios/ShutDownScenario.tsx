import { useEffect, useState } from "react";
import { Box } from '@mui/material';
import LockScreen from "Containers/Screens/LockScreen/LockScreen";
import OffScreen from "Containers/Screens/OffScreen/OffScreen";
import StartScreen from "Containers/Screens/StartScreen/StartScreen";
import SystemQuitScreen from "Containers/Screens/SystemQuitScreen/SystemQuitScreen";

const ShutDownScenario = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayDuration = 4000;

    const onIndexChange = () => {
        setCurrentIndex(prev => prev + 1);
    };

    const screens = [
        <SystemQuitScreen type='shutdown' />,
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
