import { isFolder } from "utils/isFolder";
import type { DesktopFile } from "types/desktop";

export const getFileById  = (
    root: DesktopFile,
    id: string,
): DesktopFile | null => {
    if (root.id === id) return root;

    if (isFolder(root)) {
        for (const child of root.innerContent) {
            const found = getFileById(child, id);

            if (found) return found;
        }
    }

    return null;
};