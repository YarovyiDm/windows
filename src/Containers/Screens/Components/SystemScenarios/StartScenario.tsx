import { useEffect, useState } from "react";
import { Box } from '@mui/material';
import LockScreen from "Containers/Screens/LockScreen/LockScreen";
import OffScreen from "Containers/Screens/OffScreen/OffScreen";
import StartScreen from "Containers/Screens/StartScreen/StartScreen";

const StartScenario = () => {
    const [isSystemStart, setIsSystemStart] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayDuration = 4000;

    const onSystemChange = () => {
        setIsSystemStart(true);
        setCurrentIndex(1);
    };

    const screens = [
        <OffScreen isStartScreen start={onSystemChange} />,
        <StartScreen />,
        <LockScreen />,
    ];

    useEffect(() => {
        if (currentIndex === screens.length - 1 || !isSystemStart) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, displayDuration);

        return () => clearInterval(interval);
    }, [currentIndex, screens.length, isSystemStart]);

    return <Box>{screens[currentIndex]}</Box>;
};

export default StartScenario;
