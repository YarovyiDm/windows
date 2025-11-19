export type FileSize = {
    name: string;
    iconName: string;
    size: { width: number; height: number };
    hotKeys: string;
    isSelected: boolean;
};

export type SystemType = {
    inputLanguageIndex: number;
    systemPassword: string;
    systemLanguage: string;
    isWindowsUnlock: boolean;
    desktopFileSize: { width: number; height: number };
    wallpaper: string;
    systemScenario: string;
    brightness: number;
    isNightMode: boolean;
    selectionStyles: { borderColor: string; areaColor: string };
    fileSelectionColor: string;
};

export type BasicCoordinates = {
    x: number;
    y: number;
}

export type BasicSize = {
    height: number;
    width: number;
}