import translations from "Components/I18n/translations";
import { TRANSLATION_KEYS } from "Constants/Translation";
import { ICONS } from "./Icons";

export const MIN_WINDOW_WIDTH = 430;
export const MIN_WINDOW_HEIGHT = 260;

export const DESKTOP_FILE_SIZE_KEYS = { SMALL: "small", MEDIUM: "medium", LARGE: "large" } as const;

export const DESKTOP_FILE_SIZE = {
    [DESKTOP_FILE_SIZE_KEYS.SMALL]: { width: 60, height: 50 },
    [DESKTOP_FILE_SIZE_KEYS.MEDIUM]: { width: 80, height: 70 },
    [DESKTOP_FILE_SIZE_KEYS.LARGE]: { width: 100, height: 90 },
} as const;

export const SIZE_HOT_KEYS_MAP = {
    Digit2: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.LARGE],
    Digit3: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.MEDIUM],
    Digit4: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.SMALL],
} as const;

export const DESKTOP_FILE_SIZE_UNIT = [
    { name: TRANSLATION_KEYS.BIG_ICONS as keyof typeof translations.ENG, iconName: ICONS.SQUARE_LIST, size: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.LARGE], hotKeys: "Ctrl+Shift+2" },
    { name: TRANSLATION_KEYS.MEDIUM_ICONS as keyof typeof translations.ENG, iconName: ICONS.SQUARE_LIST, size: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.MEDIUM], hotKeys: "Ctrl+Shift+3" },
    { name: TRANSLATION_KEYS.SMALL_ICONS as keyof typeof translations.ENG, iconName: ICONS.VIEW_BOXES, size: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.SMALL], hotKeys: "Ctrl+Shift+4" },
] as const;

export const DEFAULT_DESKTOP_MODAL_SIZE = {
    width: 700,
    height: 500,
};

export const DEFAULT_DESKTOP_CONTEXT_MENU_WIDTH: number = 250;

export const HIDDEN_APPS: Array<string> = [
    ICONS.POSTMAN,
    ICONS.WEBSTORM,
    ICONS.TELEGRAM,
    ICONS.STEAM,
    ICONS.BROWSER,
    ICONS.SKYPE,
];
