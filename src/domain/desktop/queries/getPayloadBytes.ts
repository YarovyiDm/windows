import { getTextSize } from "utils/getTextSize";
import type {
    DesktopFile,
    FolderWindowPayload,
    BrowserWindowPayload,
    PropertiesPayload,
    TextWindowPayload,
    PDFFile,
} from "types/desktop";

type PayloadSizeInput =
    | DesktopFile
    | DesktopFile[]
    | TextWindowPayload
    | FolderWindowPayload
    | BrowserWindowPayload
    | PropertiesPayload
    | PDFFile["innerContent"]
    | string
    | number
    | boolean
    | null
    | undefined
    | Record<string, unknown>;

export const getPayloadBytes = (input: PayloadSizeInput): number => {
    const visited = new WeakSet<object>();
    let bytes = 0;

    const walk = (value: PayloadSizeInput): void => {
        if (value === null || value === undefined) return;

        if (typeof value === "string") {
            bytes += getTextSize(value);
            return;
        }

        if (typeof value === "number" || typeof value === "boolean") {
            bytes += getTextSize(String(value));
            return;
        }

        if (Array.isArray(value)) {
            value.forEach(walk);
            return;
        }

        if (typeof value === "object") {
            if (visited.has(value)) return;
            visited.add(value);

            Object.values(value).forEach(v => walk(v as PayloadSizeInput));
        }
    };

    walk(input);
    return bytes;
};