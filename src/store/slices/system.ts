import { DESKTOP_FILE_SIZE_KEYS } from 'constants/desktop';
import { SYSTEM_LANGUAGES_SHORTCUT, SYSTEM_PASSWORD, SYSTEM_SCENARIOS, SYSTEM_SLICES } from 'constants/system';
import { WALLPAPERS } from 'constants/wallpapers';
import { DESKTOP_FILE_SIZE } from "constants/desktop";
import { DEFAULT_LANGUAGE_INDEX, LANGUAGE_CHANGE_STEP, MAX_LANGUAGES } from "constants/languages";
import { type SystemType } from "types/system";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import translations from "Components/I18n/translations";

const initialSystemState = {
    inputLanguageIndex: DEFAULT_LANGUAGE_INDEX,
    systemPassword: SYSTEM_PASSWORD,
    systemLanguage: SYSTEM_LANGUAGES_SHORTCUT.UA,
    isWindowsUnlock: false,
    desktopFileSize: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.MEDIUM],
    wallpaper: WALLPAPERS[2],
    systemScenario: SYSTEM_SCENARIOS.START,
    brightness: 1,
    isNightMode: false,
    selectionStyles: {
        borderColor: "#4a90e2",
        areaColor: "rgba(74, 144, 226, 0.2)",
    },
    fileSelectionColor: "rgba(179, 180, 179, 1)",
    userLocationCity: "",
} satisfies SystemType;

const systemSlice = createSlice({
    name: SYSTEM_SLICES.SYSTEM,
    initialState: initialSystemState,
    reducers: {
        changeLanguageIndexByHotKeys(state: SystemType) {
            if (state.inputLanguageIndex >= MAX_LANGUAGES) {
                state.inputLanguageIndex = DEFAULT_LANGUAGE_INDEX;
            } else {
                state.inputLanguageIndex += LANGUAGE_CHANGE_STEP;
            }
        },
        changeLanguageIndex(state: SystemType, action) {
            state.inputLanguageIndex = action.payload;
        },
        changeDesktopFileSize(state: SystemType, action) {
            state.desktopFileSize = action.payload;
        },
        changeWallpaper(state: SystemType, action) {
            state.wallpaper = action.payload;
        },
        toggleWindowsUnlock(state: SystemType, action: PayloadAction<boolean>) {
            state.isWindowsUnlock = action.payload;
        },
        changeSystemLanguage(state: SystemType, action: PayloadAction<keyof typeof translations>) {
            state.systemLanguage = action.payload;
        },
        updateSystemScenario(state: SystemType, action) {
            state.systemScenario = action.payload;
        },
        changeBrightness(state: SystemType, action: PayloadAction<number>) {
            state.brightness = action.payload;
        },
        changeNightMode(state: SystemType) {
            state.isNightMode = !state.isNightMode;
        },
        changeSelectionStyle(
            state: SystemType,
            action: PayloadAction<{
                key: keyof typeof state.selectionStyles;
                value: string;
            }>,
        ) {
            state.selectionStyles[action.payload.key] = action.payload.value;
        },
        changeFileSelectionColor(
            state: SystemType,
            action: PayloadAction<string>,
        ) {
            state.fileSelectionColor = action.payload;
        },
        changeUserLocationCity(state: SystemType, action: PayloadAction<string>) {
            state.userLocationCity = action.payload;
        },
    },
});

export default systemSlice.reducer;
export const {
    changeLanguageIndexByHotKeys,
    changeLanguageIndex,
    changeDesktopFileSize,
    changeWallpaper,
    toggleWindowsUnlock,
    changeSystemLanguage,
    updateSystemScenario,
    changeBrightness,
    changeNightMode,
    changeSelectionStyle,
    changeFileSelectionColor,
    changeUserLocationCity,
} = systemSlice.actions;
