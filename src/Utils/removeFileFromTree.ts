import { DesktopFile, FILE_TYPE } from "Types/Desktop";

export const removeFileFromTree = (
    files: DesktopFile[],
    id: string,
): DesktopFile | null => {
    const index = files.findIndex(f => f.id === id);

    if (index !== -1) {
        return files.splice(index, 1)[0];
    }

    for (const file of files) {
        if (file.type === FILE_TYPE.FOLDER) {
            const removed = removeFileFromTree(file.innerContent, id);

            if (removed) return removed;
        }
    }

    return null;
};