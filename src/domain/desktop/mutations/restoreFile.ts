import { FILE_META } from "constants/system";
import { isFolder } from "utils/isFolder";
import { getBin } from "../queries/getBin";
import { getFileById } from "../queries/getFileById";
import { getFolderById } from "../queries/getFolderById";
import { detachFile } from "./detachFile";
import type { Desktop } from "types/desktop";

export const restoreFile = (
    state: Desktop,
    fileId: string,
): boolean => {
    const bin = getBin(state);
    const file = detachFile(bin, fileId);

    if (!file) return false;

    if (file.parentId) {
        const parentFolder = getFolderById(state.root, file.parentId);

        if (parentFolder && isFolder(parentFolder)) {
            parentFolder.innerContent.push(file);
            return true;
        }
    }

    const desktop = getFileById(state.root, FILE_META.DESKTOP.id);

    if (desktop && isFolder(desktop)) {
        file.parentId = desktop.id;
        desktop.innerContent.push(file);
        return true;
    }

    return false;
};