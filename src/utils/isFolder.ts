import type { DesktopFile, FolderFile } from "types/desktop";

export const isFolder = (
    file: DesktopFile | null | undefined,
): file is FolderFile => {
    return !!file && "innerContent" in file && Array.isArray(file.innerContent);
};