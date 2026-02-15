import { isFolder } from "utils/isFolder";
import type { DesktopFile } from "types/desktop";

export const getFileWithParentById = (
    file: DesktopFile,
    id: string,
): { file: DesktopFile; parent: DesktopFile; index: number; draggable: boolean; } | null => {

    if (!isFolder(file)) {
        return null;
    }

    const index = file.innerContent.findIndex(child => child.id === id);

    if (index !== -1) {
        return {
            file: file.innerContent[index],
            parent: file,
            index,
            draggable: file.innerContent[index].draggable,
        };
    }

    for (const child of file.innerContent) {
        const found = getFileWithParentById(child, id);

        if (found) return found;
    }

    return null;
};
