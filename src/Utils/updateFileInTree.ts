import { DesktopFile, FILE_TYPE, TextFile } from "Types/Desktop";

export const updateFileInTree = (
    files: DesktopFile[],
    id: string,
    newValue: string | DesktopFile[],
    size?: number,
): boolean => {
    for (const file of files) {
        if (file.id === id) {
            if ('innerContent' in file && Array.isArray(newValue)) {
                file.innerContent = newValue;
            } else if ('innerContent' in file && typeof newValue === 'string') {
                (file as TextFile).innerContent = newValue;
                (file as TextFile).updated_at = new Date().toISOString();
            }

            if (size !== undefined) file.size = size;

            return true;
        }

        if (file.type === FILE_TYPE.FOLDER && 'innerContent' in file) {
            const updated = updateFileInTree(file.innerContent, id, newValue, size);

            if (updated) return true;
        }
    }

    return false;
};