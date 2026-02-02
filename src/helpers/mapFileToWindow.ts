import { DesktopFile, FILE_TYPE } from "Types/Desktop";
import { DesktopWindow, WINDOW_KIND } from "Types/Desktop";
import { getRandomCenterCoordinates } from "./getRandomCenterCoordinates";

export const mapFileToWindow = (
    file: DesktopFile,
): DesktopWindow => {
    switch (file.type) {
    case FILE_TYPE.TEXT:
        return {
            id: file.id,
            kind: WINDOW_KIND.TEXT,
            title: file.name,
            zIndex: 10,
            position: getRandomCenterCoordinates(),
            payload: {
                content: file.innerContent,
            },
        };

    case FILE_TYPE.FOLDER:
        return {
            id: file.id,
            kind: WINDOW_KIND.FOLDER,
            title: file.name,
            zIndex: 10,
            position: getRandomCenterCoordinates(),
            payload: {
                files: file.innerContent,
            },
        };

    case FILE_TYPE.SETTINGS:
        return {
            id: "settings",
            kind: WINDOW_KIND.SETTINGS,
            title: "Settings",
            zIndex: 10,
            payload: {},
        };

    default:
        throw new Error("Unsupported file type");
    }
};
