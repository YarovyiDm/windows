import { SYSTEM_SCENARIOS } from "constants/system";
import translations from "Components/I18n/translations";

export type BasicSize = {
    height: number;
    width: number;
}

export type SystemType = {
    inputLanguageIndex: number;
    systemPassword: string;
    systemLanguage: keyof typeof translations;
    isWindowsUnlock: boolean;
    desktopFileSize: BasicSize;
    wallpaper: string;
    systemScenario: keyof typeof SYSTEM_SCENARIOS;
    brightness: number;
    isNightMode: boolean;
    selectionStyles: { borderColor: string; areaColor: string; };
    fileSelectionColor: string;
    userLocationCity: string;
};

export type BasicCoordinates = {
    x: number;
    y: number;
}

