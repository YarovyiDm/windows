import { DesktopFile, FILE_TYPE, FolderFile } from "Types/Desktop";

export const findFileWithParent = (
    files: DesktopFile[],
    fileId: string,
    parent: FolderFile | null = null,
): {
    file: DesktopFile;
    parent: FolderFile | null;
    index: number;
} | null => {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.id === fileId) {
            return { file, parent, index: i };
        }

        if (file.type === FILE_TYPE.FOLDER) {
            const found = findFileWithParent(
                file.innerContent,
                fileId,
                file,
            );

            if (found) return found;
        }
    }

    return null;
};
