import translations from "Components/I18n/translations";
import wallpaper from "../assets/wallpaper.jpeg";
import bri from "../assets/bri.jpg";
import bessHamiti from "../assets/bessHamiti.jpg";
import iriser from "../assets/iriser.jpg";
import witcher from "../assets/witcher.jpg";
import witcher2 from "../assets/witcher2.jpg";

export const ICONS = {
    USER: "User",
    POWER: "Power",
    SEARCH: "Search",
    WINDOWS: "Windows",
    GITHUB: "Github",
    LINKEDIN: "Linkedin",
    FOLDER: "FOLDER",
    ARROW: "Arrow",
    TEXT_FILE: "TEXT",
    SETTINGS: "SETTINGS",
    CROSS: "Cross",
    VIEW_BOXES: "ViewBoxes",
    PLUS_CIRCLE: "PlusCircle",
    RIGHT_ARROW: "RightArrow",
    SQUARE_IN_SQUARE: "SquareInSquare",
    SQUARE_OUTLINE: "SquareOutLine",
    LINE: "Line",
    EDIT: "Edit",
    FULL_ARROW: "FullArrow",
    STASH: "Stash",
} as const;

export const SLEEP: string = "Sleep";
export const RELOAD: string = "Reload";
export const SQUARE_LIST: string = "SquareList";//-----
export const DOT: string = "Dot";//------

export const SYSTEM_ACTIONS = {
    POWER: "Power",
    SLEEP: "Sleep",
    RELOAD: "Reload",
} as const;

export const WALLPAPERS = [
    wallpaper,
    bri,
    bessHamiti,
    iriser,
    witcher,
    witcher2,
];

export const SYSTEM: string = "system";
export const SYSTEM_PASSWORD: string = "1111";
export const ZERO_POSITION = {
    x: 0,
    y: 0,
};
export const MIN_WINDOW_WIDTH = 430;
export const MIN_WINDOW_HEIGHT = 260;
export const TASK_PANEL_HEIGHT = 51;
export const SHOW_SAVE_MESSAGE_DELAY = 2000;

// Languages
export const LANG_ABBR = {
    ENG: "ENG",
    UA: "УКР",
    POL: "POL",
} as const;
export const LANGUAGES = [
    {
        abbreviation: LANG_ABBR.UA,
        title: "Українська",
        subTitle: "Українська (розширена)",
    },
    { abbreviation: LANG_ABBR.ENG, title: "Англійська (США)", subTitle: "US" },
    { abbreviation: LANG_ABBR.POL, title: "Польська", subTitle: "Польська" },
] as const;
export const DEFAULT_LANGUAGE_INDEX: number = 0;
export const LANGUAGE_CHANGE_STEP: number = 1;
export const MAX_LANGUAGES: number = LANGUAGES.length - LANGUAGE_CHANGE_STEP;

// Key codes
export const KEY_CODES = {
    DELETE: "Delete",
    ENTER: "Enter",
    S: "KeyS",
} as const;

// Events
export const DOM_EVENTS = {
    KEY_DOWN: "keydown",
    MOUSE_DOWN: "mousedown",
    MOUSE_MOVE: "mousemove",
    MOUSE_UP: "mouseup",
    CLICK: "click",
    CONTEXT_MENU: "contextmenu",
} as const;

export const MOUSE_BUTTONS = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
} as const;

// Directions
export const DIRECTIONS = {
    RIGHT: "right",
    BOTTOM: "bottom",
    RIGHT_BOTTOM: "right bottom",
} as const;

export const DIRECTIONS_RESIZE_MAP = [
    { name: DIRECTIONS.RIGHT, class: "resizeHandleRight" },
    { name: DIRECTIONS.BOTTOM, class: "resizeHandleBottom" },
    { name: DIRECTIONS.RIGHT_BOTTOM, class: "resizeHandleCorner" },
] as const;

// Desktop file sizes
export const DESKTOP_FILE_SIZE_KEYS = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
} as const;

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
    {
        name: "bigIcons" as keyof typeof translations.en,
        iconName: SQUARE_LIST,
        size: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.LARGE],
        hotKeys: "Ctrl+Shift+2",
    },
    {
        name: "mediumIcons" as keyof typeof translations.en,
        iconName: SQUARE_LIST,
        size: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.MEDIUM],
        hotKeys: "Ctrl+Shift+3",
    },
    {
        name: "smallIcons" as keyof typeof translations.en,
        iconName: ICONS.VIEW_BOXES,
        size: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.SMALL],
        hotKeys: "Ctrl+Shift+4",
    },
] as const;

//System scenarios
export const SYSTEM_SCENARIOS = {
    RESTART: "restart",
    SHUTDOWN: "shutdown",
} as const;

export const POWER_MODAL_UNITS = {
    [SYSTEM_ACTIONS.POWER]: { name: "Завершити роботу", scenario: SYSTEM_SCENARIOS.SHUTDOWN },
    [SYSTEM_ACTIONS.SLEEP]: { name: "Сон", scenario: SYSTEM_SCENARIOS.RESTART },
    [SYSTEM_ACTIONS.RELOAD]: { name: "Перезавантажити", scenario: SYSTEM_SCENARIOS.RESTART },
} as const;
