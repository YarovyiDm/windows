import { isFolder } from "utils/isFolder";
import { type DesktopFile, FILE_TYPE } from "types/desktop";

export const getFolderById = (
    root: DesktopFile,
    id: string,
): DesktopFile | null => {
    if (root.type === FILE_TYPE.FOLDER) {
        if (root.id === id) return root;

        if (isFolder(root)) {
            for (const child of root.innerContent) {
                const found = getFolderById(child, id);

                if (found) return found;
            }
        }
    }

    return null;
};
