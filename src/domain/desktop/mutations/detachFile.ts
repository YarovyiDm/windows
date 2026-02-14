import { isFolder } from "utils/isFolder";
import { type DesktopFile, FILE_TYPE } from "types/desktop";

export const detachFile = (root: DesktopFile, fileId: string): DesktopFile | null => {
    if (!isFolder(root)) return null;

    const index = root.innerContent.findIndex(f => f.id === fileId);

    if (index !== -1) return root.innerContent.splice(index, 1)[0];

    for (const child of root.innerContent) {
        if (child.type === FILE_TYPE.FOLDER) {
            const removed = detachFile(child, fileId);

            if (removed) return removed;
        }
    }

    return null;
};
