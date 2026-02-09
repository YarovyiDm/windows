import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { WINDOW_KIND } from "Types/Desktop";
import { TRANSLATION_KEYS } from "Constants/Translation";

export const SYSTEM = "system";
export const SYSTEM_PASSWORD = "1111";
export const SYSTEM_SLICES = {
    DESKTOP: "DESKTOP",
    SYSTEM: "SYSTEM",
    TASK_BAR: "TASK_BAR",
};

export const SYSTEM_ACTIONS = {
    POWER: "Power",
    LOCK: "Lock",
    RESTART: "Restart",
} as const;

export const SYSTEM_SCENARIOS = {
    RESTART: "RESTART",
    SHUTDOWN: "SHUTDOWN",
    LOCK: "LOCK",
    START: "START",
} as const;

export const CONTEXT_MENU_TYPES = {
    DESKTOP: "DESKTOP",
    FILE: "FILE",
    FOLDER: "FOLDER",
} as const;

export const POWER_MODAL_UNITS = {
    [SYSTEM_ACTIONS.POWER]: { title: TRANSLATION_KEYS.POWER_MODAL.SHUT_DOWN, scenario: SYSTEM_SCENARIOS.SHUTDOWN, icon: <PowerSettingsNewIcon /> },
    [SYSTEM_ACTIONS.LOCK]: { title: TRANSLATION_KEYS.POWER_MODAL.LOCK, scenario: SYSTEM_SCENARIOS.LOCK, icon: <LockOutlineIcon /> },
    [SYSTEM_ACTIONS.RESTART]: { title: TRANSLATION_KEYS.POWER_MODAL.RESTART, scenario: SYSTEM_SCENARIOS.RESTART, icon: <RestartAltIcon /> },
} as const;

export const TASK_PANEL_HEIGHT = 48;
export const SHOW_SAVE_MESSAGE_DELAY = 2000;
export const ZERO_POSITION = { x: 0, y: 0 };
export const WINDOW_ZINDEX_MULTIPLIER = 100;
export const MAX_BROWSER_TABS_COUNT = 5;
export const MIN_BROWSER_TABS_COUNT = 1;

export const WINDOW_META = {
    [WINDOW_KIND.BROWSER]: { title: "Google Chrome", id: WINDOW_KIND.BROWSER },
    [WINDOW_KIND.SETTINGS]: { title: "Settings", id: WINDOW_KIND.SETTINGS },
    [WINDOW_KIND.TEXT]: { title: "", id: WINDOW_KIND.TEXT },
    [WINDOW_KIND.FOLDER]: { title: "", id: WINDOW_KIND.FOLDER },
    [WINDOW_KIND.BIN]: { title: "", id: WINDOW_KIND.BIN },
    [WINDOW_KIND.PDF]: { title: "Yarovyi_CV", id: WINDOW_KIND.PDF },
} as const;

export const DEFAULT_NOTIFICATION_DELAY = 3000;
export const DEFAULT_NOTIFICATION_DURATION = 5000;

export const SYSTEM_LANGUAGES_SHORTCUT = {
    UA: "UA",
    PL: "PL",
    ENG: "ENG",
} as const;