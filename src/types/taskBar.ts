import { ICONS } from "constants/icons";
import { TASKBAR_MODALS } from "constants/taskBar";
import { FILE_TYPE } from "types/desktop";

export type BaseTaskBarApp = {
    id: string;
    name: string;
    icon: keyof typeof ICONS;
    isOpen?: boolean;
    isFocused?: boolean;
}

export type BrowserFile = BaseTaskBarApp & {
    type: FILE_TYPE.BROWSER;
};

export type ExplorerFile = BaseTaskBarApp & {
    type : FILE_TYPE.FOLDER;
}

export type TaskBarApp = BrowserFile | ExplorerFile;
export type TaskBarModal = typeof TASKBAR_MODALS[keyof typeof TASKBAR_MODALS];

export type TaskBarState = {
    taskBarApps: TaskBarApp[];
    modalStack: TaskBarModal[];
};