import type { DesktopFile } from "types/desktop";

export const updateFileName = (file: DesktopFile, newName: string) => {
    file.name = newName;
    file.updated_at = new Date().toISOString();
};