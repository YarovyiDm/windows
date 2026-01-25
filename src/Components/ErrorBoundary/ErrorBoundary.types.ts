import { ReactNode } from "react";

export type ProgressBarState = {
    progress: number;
    stepIndex: number;
    hasError: boolean;
}

export type ErrorBoundaryProps = {
    children: ReactNode;
    dispatchScenarioAction: () => void;
}