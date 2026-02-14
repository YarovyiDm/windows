import { isFolder } from "utils/isFolder";
import type { DesktopFile, TextFile } from "types/desktop";

export const updateFile = (
    file: DesktopFile,
    id: string,
    newValue: string | DesktopFile[],
    size?: number,
): boolean => {
    if (file.id === id) {

        if ('innerContent' in file && Array.isArray(newValue)) {
            file.innerContent = newValue;
            file.updated_at = new Date().toISOString();
        } else if ('innerContent' in file && typeof newValue === 'string') {
            (file as TextFile).innerContent = newValue;
            (file as TextFile).updated_at = new Date().toISOString();
        }

        if (size !== undefined) file.size = size;

        return true;
    }

    if (isFolder(file)) {
        for (const child of file.innerContent) {
            const updated = updateFile(child, id, newValue, size);

            if (updated) return true;
        }
    }

    return false;
};