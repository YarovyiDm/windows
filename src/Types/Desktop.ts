import { BasicCoordinates } from "Types/System";

export type TextWindowPayload = {
    content: string;
};

export type FolderWindowPayload = {
    files: DesktopFile[];
};

// export type BrowserTab = {
//     id: string;
//     title: string;
//     url: string;
// };
//
// export type BrowserWindowPayload = {
//     tabs: BrowserTab[];
//     activeTabId: string;
// };
//
export type SettingsWindowPayload = Record<string, never>;

export enum WINDOW_KIND {
    TEXT = "TEXT",
    FOLDER = "FOLDER",
    BROWSER = "BROWSER",
    SETTINGS = "SETTINGS",
}

export type DesktopWindow =
    | {
    id: string;
    kind: WINDOW_KIND.TEXT;
    title: string;
    zIndex: number;
    position?: BasicCoordinates;
    payload: TextWindowPayload;
}
    | {
    id: string;
    kind: WINDOW_KIND.FOLDER;
    title: string;
    zIndex: number;
    position?: BasicCoordinates;
    payload: FolderWindowPayload;
}
//     | {
//     id: string;
//     kind: WINDOW_KIND.BROWSER;
//     title: string;
//     zIndex: number;
//     position?: BasicCoordinates;
//     payload: BrowserWindowPayload;
// }
    | {
    id: string;
    kind: WINDOW_KIND.SETTINGS;
    title: string;
    zIndex: number;
    position?: BasicCoordinates;
    payload: SettingsWindowPayload;
};

export enum FILE_TYPE {
    TEXT = "TEXT",
    FOLDER = "FOLDER",
    LINK = "LINK",
    SETTINGS = "SETTINGS",
}

export type BaseDesktopFile = {
    id: string;
    name: string;
    icon: string;
    position: { x: number; y: number; };
    size?: number;
    isSelected: boolean;
    parentFolderId?: string | null;
};

export type TextDesktopFile = BaseDesktopFile & {
    type: FILE_TYPE.TEXT;
    innerContent: string;
};

export type FolderDesktopFile = BaseDesktopFile & {
    type: FILE_TYPE.FOLDER;
    innerContent: DesktopFile[];
};

export type LinkDesktopFile = BaseDesktopFile & {
    type: FILE_TYPE.LINK;
    link: string;
};

export type SettingsDesktopFile = BaseDesktopFile & {
    type: FILE_TYPE.SETTINGS;
};

export type DesktopFile =
    | TextDesktopFile
    | FolderDesktopFile
    | SettingsDesktopFile
    | LinkDesktopFile;

// export type IFile = {
//     name: string;
//     icon: string;
//     position: BasicCoordinates;
//     isSelected: boolean;
//     type: string;
//     innerContent: Array<IFile> | string;
//     isOpened: boolean;
//     id: string;
//     size: number;
//     link?: string;
// };

export type Desktop = {
    desktopFiles: DesktopFile[];
    bin: DesktopFile[];
    selectedFiles: Array<string>;
    openedWindows: DesktopWindow[];
};
