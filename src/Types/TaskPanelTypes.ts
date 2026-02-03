import React from "react";
import { FILE_TYPE } from "Types/Desktop";

export type ObjectOfModalRefs = {
    isWindowsModalOpen: React.MutableRefObject<null>;
    isHiddenAppsModalOpen: React.MutableRefObject<null>;
    isLanguagesModalOpen: React.MutableRefObject<null>;
};

export type BaseTaskPanelApp = {
    id: string;
    name: string;
    icon: string;
    isOpen?: boolean;
    isFocused?: boolean;
}

export type BrowserFile = BaseTaskPanelApp & {
    type: FILE_TYPE.BROWSER;
};

export type taskPanelApp = BrowserFile

export type TaskPanelType = {
    taskPanelApps: taskPanelApp[];
    isHiddenAppsModalOpen: boolean;
    isWindowsModalOpen: boolean;
    isPowerModalOpen: boolean;
    isLanguagesModalOpen: boolean;
};

export type ModalNames =
    | "isHiddenAppsModalOpen"
    | "isWindowsModalOpen"
    | "isPowerModalOpen"
    | "isLanguagesModalOpen";

export interface ToggleModalPayload {
    modalName: ModalNames;
}
