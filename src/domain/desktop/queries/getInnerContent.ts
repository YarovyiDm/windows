import { isFolder } from "utils/isFolder";
import type { DesktopFile } from "types/desktop";

export const getInnerContent = (file: DesktopFile | undefined | null) => {
    if(isFolder(file) && file.innerContent.length > 0) {
        return file.innerContent;
    }

    return [];
};