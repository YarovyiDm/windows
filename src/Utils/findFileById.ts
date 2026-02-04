import { DesktopFile, FILE_TYPE } from "Types/Desktop";

export const findFileById = (
    files: DesktopFile[],
    id: string,
): DesktopFile | null => {
    for (const file of files) {
        if (file.id === id) {
            return file;
        }

        if (file.type === FILE_TYPE.FOLDER) {
            const found = findFileById(file.innerContent, id);

            if (found) return found;
        }
    }

    return null;
};