import { DISK_TYPES } from "constants/system";
import { SETTINGS_TAB } from "constants/settings";
import type { BasicCoordinates } from "types/system";

export type TextWindowPayload = {
    content: string;
};

export type FolderWindowPayload = {
    files: DesktopFile[];
};

export type BinWindowPayload = {
    files: DesktopFile[];
}

export type PropertiesPayload = {
    fileName: string;
    updated_at: string;
    created_at: string;
    content: DesktopFile[] | string | PDFFile["innerContent"];
    fileType: string;
    icon?: string;
}

export type SettingsWindowPayload = Record<string, never>;
export type BrowserWindowPayload = Record<string, never>;

export enum WINDOW_KIND {
    TEXT = "TEXT",
    FOLDER = "FOLDER",
    BROWSER = "BROWSER",
    SETTINGS = "SETTINGS",
    BIN = "BIN",
    PROPERTIES = "PROPERTIES",
    PDF = "PDF",
    EXPLORER = "EXPLORER",
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
    initialTab?: (typeof SETTINGS_TAB)[keyof typeof SETTINGS_TAB];
}
    | {
    id: string;
    kind: WINDOW_KIND.BIN;
    title: string;
    zIndex: number;
    position?: BasicCoordinates;
    payload: BinWindowPayload;
}
    | {
    id: string;
    kind: WINDOW_KIND.PROPERTIES;
    title: string;
    zIndex: number;
    position?: BasicCoordinates;
    payload: PropertiesPayload;
}
    | {
    id: string;
    kind: WINDOW_KIND.PDF;
    title: string;
    zIndex: number;
    position?: BasicCoordinates;
    payload: PDFFile["innerContent"];
};

export enum FILE_TYPE {
    TEXT = "TEXT",
    FOLDER = "FOLDER",
    LINK = "LINK",
    SETTINGS = "SETTINGS",
    DESKTOP = "DESKTOP",
    BROWSER = "BROWSER",
    BIN = "BIN",
    PDF = "PDF",
}

export type BaseDesktopFile = {
    id: string;
    name: string;
    icon: string;
    size?: number;
    isSelected: boolean;
    parentId?: string;
    created_at?: string;
    updated_at?: string;
    diskId: typeof DISK_TYPES[keyof typeof DISK_TYPES];
    systemFile?: boolean;
    draggable: boolean;
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
    initialTab?: SETTINGS_TAB;
};

export type BrowserFile = BaseDesktopFile & {
    type: FILE_TYPE.BROWSER;
};

export type BinFile = BaseDesktopFile & {
    type: FILE_TYPE.BIN;
    innerContent: DesktopFile[];
}

export type PDFFile = BaseDesktopFile & {
    type: FILE_TYPE.PDF;
    innerContent: {
        title: string;
        info:{
            name: string;
            email: string;
            location: string;
        };
        summary: {
            title: string;
            text: string;
        };
        techSkills: {
            title: string;
            frontend: {
                title: string;
                list: string[];
            };
            backend: {
                title: string;
                list: string[];
            };
            engineeringPractice: {
                title: string;
                list: string[];
            };
            tools: {
                title: string;
                list: string[];
            };
        };
        experience: {
            title: string;
            jobs: {
                companyName: string;
                period: string;
                position: string;
                techStack: string;
                list: string[];
            }[];
        };
    };
}

export type DesktopFile =
    | TextFile
    | FolderFile
    | SettingsFile
    | LinkFile
    | BrowserFile
    | BinFile
    | PDFFile;

export type Desktop = {
    root: DesktopFile;
    selectedFiles: Array<string>;
    openedWindows: DesktopWindow[];
    draggingFile: DesktopFile & { initialCursorPos: {x: number; y: number;};} | null;
};
