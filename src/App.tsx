import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import { Desktop, TaskBar } from "Containers";
import { useLanguage } from "Hooks";
import { changeLanguageIndexByHotKeys, changeUserLocationCity } from "Store/slices/System";
import { updateFile } from "Store/slices/Desktop";
import RestartScenario from "Containers/Screens/Components/SystemScenarios/RestartScenario";
import StartScenario from "Containers/Screens/Components/SystemScenarios/StartScenario";
import ShutDownScenario from "Containers/Screens/Components/SystemScenarios/ShutDownScenario";
import {
    selectNightMode,
    selectSystemBrightness,
    selectSystemScenario,
} from "Store/selectors/System";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import { useUserLocation } from "Hooks/Api";
import { DOM_EVENTS } from "Constants/Events";
import { TRANSLATION_KEYS } from "Constants/Translation";
import { useAppSelector } from "./Store";
import styles from "./App.module.scss";

const SCENARIOS_MAP = {
    restart: <RestartScenario />,
    start: <StartScenario />,
    shutdown: <ShutDownScenario />,
};

function App() {
    const dispatch = useDispatch();
    const { translate } = useLanguage();
    const systemScenario = useAppSelector(selectSystemScenario);
    const windowsRef = useRef<HTMLDivElement | null>(null);
    const brightness = useAppSelector(selectSystemBrightness);
    const isNightMode = useAppSelector(selectNightMode);
    const location = useUserLocation();

    useEffect(() => {
        if (windowsRef.current) {
            if (isNightMode) {
                windowsRef.current.style.filter =
                    "sepia(0.3) brightness(0.6) contrast(1.2)";
            } else {
                windowsRef.current.style.filter = `brightness(${brightness})`;
            }
        }
    }, [brightness, isNightMode]);

    const detectKeyDown = (e: KeyboardEvent) => {
        if (e.shiftKey && e.altKey) {
            dispatch(changeLanguageIndexByHotKeys());
        }
    };

    useEffect(() => {
        if (location.isSuccess && location.data?.city) {
            dispatch(changeUserLocationCity(location.data.city));
        }
    }, [location.isSuccess, location.data?.city, dispatch]);

    useEffect(() => {
        const handleContextMenu = (e: Event) => {
            e.preventDefault();
        };

        dispatch(updateFile({ id: ":2d", newValue: translate(TRANSLATION_KEYS.READ_ME) }));
        document.addEventListener(DOM_EVENTS.CONTEXT_MENU, handleContextMenu);
        document.addEventListener(
            DOM_EVENTS.KEY_DOWN,
            detectKeyDown as EventListener,
        );
        return () => {
            document.removeEventListener(DOM_EVENTS.CONTEXT_MENU, handleContextMenu);
        };
    }, []);

    return (
        <ErrorBoundary>
            <div className={styles.window} ref={windowsRef}>
                <Tooltip
                    id='taskPanelTooltips'
                    className={styles.taskPanelAppTooltip}
                    classNameArrow={styles.tooltipArrow}
                />
                {systemScenario
                    ? SCENARIOS_MAP[systemScenario as keyof typeof SCENARIOS_MAP]
                    : (
                        <>
                            <Desktop key='desktop' />
                            <TaskBar key='taskbar' />
                        </>
                    )}
            </div>
        </ErrorBoundary>
    );
}

export default App;
