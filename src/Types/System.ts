export type BasicSize = {
    height: number;
    width: number;
}

export type FileSize = {
    name: string;
    iconName: string;
    size: BasicSize;
    hotKeys: string;
    isSelected: boolean;
};

export type SystemType = {
    inputLanguageIndex: number;
    systemPassword: string;
    systemLanguage: string;
    isWindowsUnlock: boolean;
    desktopFileSize: BasicSize;
    wallpaper: string;
    systemScenario: string;
    brightness: number;
    isNightMode: boolean;
    selectionStyles: { borderColor: string; areaColor: string; };
    fileSelectionColor: string;
    settingsWindowID: string;
};

export type BasicCoordinates = {
    x: number;
    y: number;
}

