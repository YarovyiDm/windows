import { DesktopFile } from "Types/Desktop";

export const isFolder = (
    file: DesktopFile,
): file is DesktopFile & { innerContent: DesktopFile[]; } => {
    return (
        "innerContent" in file &&
        Array.isArray(file.innerContent)
    );
};