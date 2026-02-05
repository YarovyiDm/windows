import { RootState } from "..";

export const selectModalStack = (state: RootState) =>
    state.taskBar.modalStack;

export const selectTopModal = (state: RootState) =>
    state.taskBar.modalStack.at(-1) ?? null;

export const selectTaskBarApps = (state: RootState) =>
    state.taskBar.taskBarApps;