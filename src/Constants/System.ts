import { WINDOW_KIND } from "Types/Desktop";

export const SYSTEM = "system";
export const SYSTEM_PASSWORD = "1111";
export const SYSTEM_SLICES = {
    DESKTOP: "DESKTOP",
    SYSTEM: "SYSTEM",
    TASK_PANEL: "TASK_PANEL",
};

export const SYSTEM_ACTIONS = {
    POWER: "Power",
    SLEEP: "Sleep",
    RELOAD: "Reload",
} as const;

export const SYSTEM_SCENARIOS = {
    RESTART: "restart",
    SHUTDOWN: "shutdown",
} as const;

export const CONTEXT_MENU_TYPES = {
    DESKTOP: "DESKTOP",
    FILE: "FILE",
    FOLDER: "FOLDER",
} as const;

export const POWER_MODAL_UNITS = {
    [SYSTEM_ACTIONS.POWER]: { name: "Завершити роботу", scenario: SYSTEM_SCENARIOS.SHUTDOWN },
    [SYSTEM_ACTIONS.SLEEP]: { name: "Сон", scenario: SYSTEM_SCENARIOS.RESTART },
    [SYSTEM_ACTIONS.RELOAD]: { name: "Перезавантажити", scenario: SYSTEM_SCENARIOS.RESTART },
} as const;

export const TASK_PANEL_HEIGHT = 51;
export const SHOW_SAVE_MESSAGE_DELAY = 2000;
export const ZERO_POSITION = { x: 0, y: 0 };

export const WINDOW_META = {
    [WINDOW_KIND.BROWSER]: { title: "Google Chrome", id: WINDOW_KIND.BROWSER },
    [WINDOW_KIND.SETTINGS]: { title: "Settings", id: WINDOW_KIND.SETTINGS },
    [WINDOW_KIND.TEXT]: { title: "", id: WINDOW_KIND.TEXT },
    [WINDOW_KIND.FOLDER]: { title: "", id: WINDOW_KIND.FOLDER },
} as const;