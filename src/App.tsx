import { DOM_EVENTS } from "constants/events";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Desktop, TaskBar } from "Containers";
import { isMobileDevice } from "utils/isMobileDevice";
import { changeLanguageIndexByHotKeys } from "store/slices/system";
import {
    selectNightMode,
    selectSystemBrightness,
    selectSystemScenario,
} from "store/selectors/system";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import MobilePlaceholder from "Components/MobilePlaceholder/MobilePlaceholder";
import { useScreenFilter } from "hooks/useScreenFilter";
import { useUserLocation } from "hooks/api";
import { useUpdateUserCity } from "hooks/useUpdateUserCity";
import { useAppSelector } from "./store";
import { SCENARIOS_MAP } from "./App.constants";
import { AppWrapper } from "./App.styled";

const App = () => {
    const dispatch = useDispatch();
    const systemScenario = useAppSelector(selectSystemScenario);
    const windowsRef = useRef<HTMLDivElement | null>(null);
    const brightness = useAppSelector(selectSystemBrightness);
    const isNightMode = useAppSelector(selectNightMode);
    const location = useUserLocation();

    useScreenFilter(windowsRef, brightness, isNightMode);
    useUpdateUserCity(location);

    const detectKeyDown = (e: KeyboardEvent) => {
        if (e.shiftKey && e.altKey) {
            dispatch(changeLanguageIndexByHotKeys());
        }
    };

    useEffect(() => {
        const handleContextMenu = (e: Event) => {
            e.preventDefault();
        };

        document.addEventListener(DOM_EVENTS.CONTEXT_MENU, handleContextMenu);
        document.addEventListener(
            DOM_EVENTS.KEY_DOWN,
            detectKeyDown as EventListener,
        );
        return () => {
            document.removeEventListener(DOM_EVENTS.CONTEXT_MENU, handleContextMenu);
        };
    }, []);

    if (typeof window !== 'undefined' && isMobileDevice()) {
        return <MobilePlaceholder />;
    }

    return (
        <ErrorBoundary>
            <AppWrapper ref={windowsRef}>
                {systemScenario
                    ? SCENARIOS_MAP[systemScenario as keyof typeof SCENARIOS_MAP]
                    : (
                        <>
                            <Desktop key='desktop' />
                            <TaskBar key='taskbar' />
                        </>
                    )}
            </AppWrapper>
        </ErrorBoundary>
    );
};

export default App;
