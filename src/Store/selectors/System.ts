import { createSelector } from "@reduxjs/toolkit";
import type { SystemType } from "Types/System";
import { RootState } from "..";

const selectSystem = (state: RootState) => state.system;

export const selectLanguageIndex = createSelector(
    selectSystem,
    (state: SystemType) => state.inputLanguageIndex,
);

export const selectFileSize = createSelector(
    selectSystem,
    (state: SystemType) => state.desktopFileSize,
);

export const selectWallpaper = createSelector(
    selectSystem,
    (state: SystemType) => state.wallpaper,
);

export const selectSystemLanguage = createSelector(
    selectSystem,
    (state: SystemType) => state.systemLanguage,
);

export const selectSystemScenario = createSelector(
    selectSystem,
    (state: SystemType) => state.systemScenario,
);

export const selectSystemBrightness = createSelector(
    selectSystem,
    (state: SystemType) => state.brightness,
);

export const selectNightMode = createSelector(
    selectSystem,
    (state: SystemType) => state.isNightMode,
);
export const selectSelectionStyles = createSelector(
    selectSystem,
    (state: SystemType) => state.selectionStyles,
);
export const selectFileSelectionColor = createSelector(
    selectSystem,
    (state: SystemType) => state.fileSelectionColor,
);
export const selectSettingsWindowId = createSelector(
    selectSystem,
    (state: SystemType) => state.settingsWindowID,
);