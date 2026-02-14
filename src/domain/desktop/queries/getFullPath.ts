import type { DesktopFile } from "types/desktop";
import { getFileById } from "./getFileById";

export const getFullPath = (
    root: DesktopFile,
    fileId: string,
): DesktopFile[] => {
    const path: DesktopFile[] = [];

    let current = getFileById(root, fileId);

    while (current) {
        path.unshift(current);

        if (!current.parentId) break;

        current = getFileById(root, current.parentId);
    }

    return path;
};
