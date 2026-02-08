import { DesktopFile, FILE_TYPE } from "Types/Desktop";

export const findFolder = (
    files: DesktopFile[],
    folderId: string,
): DesktopFile | null => {
    for (const file of files) {
        if (file.type === FILE_TYPE.FOLDER) {
            if (file.id === folderId) {
                return file;
            }

            if (file.innerContent?.length) {
                const found = findFolder(
                    file.innerContent,
                    folderId,
                );

                if (found) return found;
            }
        }
    }

    return null;
};