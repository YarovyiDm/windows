import { FILE_TYPE } from "Types/Desktop";
import { TASKBAR_MODALS } from "Constants/Taskbar";

export type BaseTaskBarApp = {
    id: string;
    name: string;
    icon: string;
    isOpen?: boolean;
    isFocused?: boolean;
}

export type BrowserFile = BaseTaskBarApp & {
    type: FILE_TYPE.BROWSER;
};

export type TaskBarApp = BrowserFile;
export type TaskBarModal = typeof TASKBAR_MODALS[keyof typeof TASKBAR_MODALS];

export type TaskBarState = {
    taskBarApps: TaskBarApp[];
    modalStack: TaskBarModal[];
};