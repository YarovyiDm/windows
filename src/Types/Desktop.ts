import { BasicCoordinates } from "Types/System";

export type TextWindowPayload = {
    content: string;
};

export type FolderWindowPayload = {
    files: DesktopFile[];
};

export type BrowserTab = {
    id: string;
    title: string;
    url: string;
};

export type BrowserWindowPayload = {
    // tabs: BrowserTab[];
    // activeTabId: string;
};

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
    fileId?: string;
}
    | {
    id: string;
    kind: WINDOW_KIND.FOLDER;
    title: string;
    zIndex: number;
    position?: BasicCoordinates;
    payload: FolderWindowPayload;
}
    | {
    id: string;
    kind: WINDOW_KIND.BROWSER;
    title: string;
    zIndex: number;
    position?: BasicCoordinates;
    payload: BrowserWindowPayload;
}
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
    DESKTOP = "DESKTOP",
    BROWSER = "BROWSER",
}

export type BaseDesktopFile = {
    id: string;
    name: string;
    icon: string;
    size?: number;
    isSelected: boolean;
    parentId?: string;
};

export type TextFile = BaseDesktopFile & {
    type: FILE_TYPE.TEXT;
    innerContent: string;
};

export type FolderFile = BaseDesktopFile & {
    type: FILE_TYPE.FOLDER;
    innerContent: DesktopFile[];
};

export type LinkFile = BaseDesktopFile & {
    type: FILE_TYPE.LINK;
    link: string;
};

export type SettingsFile = BaseDesktopFile & {
    type: FILE_TYPE.SETTINGS;
};

export type BrowserFile = BaseDesktopFile & {
    type: FILE_TYPE.BROWSER;
};

export type DesktopFile =
    | TextFile
    | FolderFile
    | SettingsFile
    | LinkFile
    | BrowserFile;

export type Desktop = {
    desktopFiles: DesktopFile[];
    bin: DesktopFile[];
    selectedFiles: Array<string>;
    openedWindows: DesktopWindow[];
    draggingFile: DesktopFile & { initialCursorPos: {x: number; y: number;};} | null;
};
