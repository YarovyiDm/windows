import { DesktopFile, FILE_TYPE } from "Types/Desktop";
import { DesktopWindow, WINDOW_KIND } from "Types/Desktop";
import { WINDOW_META } from "Constants/System";
import { getRandomCenterCoordinates } from "./getRandomCenterCoordinates";

export const mapFileToWindow = (
    file: DesktopFile,
    zIndex: number,
): DesktopWindow => {
    switch (file.type) {
    case FILE_TYPE.TEXT:
        return {
            id: file.id,
            kind: WINDOW_KIND.TEXT,
            title: file.name,
            zIndex,
            position: getRandomCenterCoordinates(),
            payload: {
                content: file.innerContent,
            },
            fileId: file.id,
        };

    case FILE_TYPE.FOLDER:
        return {
            id: file.id,
            kind: WINDOW_KIND.FOLDER,
            title: file.name,
            zIndex,
            position: getRandomCenterCoordinates(),
            payload: {
                files: file.innerContent,
            },
        };

    case FILE_TYPE.BIN:
        return {
            id: file.id,
            kind: WINDOW_KIND.BIN,
            title: file.name,
            zIndex,
            position: getRandomCenterCoordinates(),
            payload: {
                files: file.innerContent,
            },
        };

    case FILE_TYPE.BROWSER:
        return {
            id: file.id,
            kind: WINDOW_KIND.BROWSER,
            title: "Chrome",
            zIndex: 10,
            payload: {},
        };

    case FILE_TYPE.SETTINGS:
        return {
            id: WINDOW_META.SETTINGS.id,
            kind: WINDOW_KIND.SETTINGS,
            title: file.name,
            zIndex,
            payload: {},
        };
    case FILE_TYPE.PDF:
        return {
            id: WINDOW_META.PDF.id,
            kind: WINDOW_KIND.PDF,
            title: file.name,
            zIndex: 10,
            payload: file.innerContent,
        };

    default:
        throw new Error("Unsupported file type");
    }
};
