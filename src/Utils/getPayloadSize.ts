import { DesktopFile, FILE_TYPE, PDFFile } from "Types/Desktop";
import {
    TextWindowPayload,
    FolderWindowPayload,
    BinWindowPayload,
    PropertiesPayload,
    SettingsWindowPayload,
} from "Types/Desktop";
import { getTextSize } from "./getTextSize";

const formatBytes = (bytes: number): string => {
    if (bytes < 1024) {
        return `${bytes} B`;
    }

    if (bytes < 1024 * 1024) {
        return `${(bytes / 1024).toFixed(2)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

type PayloadSizeInput =
    | TextWindowPayload
    | FolderWindowPayload
    | BinWindowPayload
    | PropertiesPayload
    | SettingsWindowPayload
    | DesktopFile
    | DesktopFile[]
    | PDFFile["innerContent"]
    | string
    | undefined;

export const getPayloadSize = (input: PayloadSizeInput): string => {
    let bytes = 0;

    const walk = (value: PayloadSizeInput): void => {
        if (!value) return;

        if (typeof value === "string") {
            bytes += getTextSize(value);
            return;
        }

        if (Array.isArray(value)) {
            value.forEach(walk);
            return;
        }

        if ("type" in value) {
            switch (value.type) {
            case FILE_TYPE.TEXT:
                bytes += getTextSize(value.innerContent);
                return;

            case FILE_TYPE.FOLDER:
            case FILE_TYPE.BIN:
                value.innerContent.forEach(walk);
                return;

            case FILE_TYPE.LINK:
            case FILE_TYPE.SETTINGS:
            case FILE_TYPE.BROWSER:
            }
        }

        if ("content" in value && typeof value.content === "string") {
            bytes += getTextSize(value.content);
            return;
        }

        if ("files" in value && Array.isArray(value.files)) {
            value.files.forEach(walk);
            return;
        }

        if ("content" in value) {
            walk(value.content);
        }
    };

    walk(input);
    return formatBytes(bytes);
};
