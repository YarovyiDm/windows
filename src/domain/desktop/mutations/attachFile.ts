import { FILE_META } from "constants/system";
import { isFolder } from "utils/isFolder";
import type { Desktop, DesktopFile } from "types/desktop";
import { getFileById } from "../queries/getFileById";

export const attachFile = (state: Desktop, file: DesktopFile) => {
    const desktop = getFileById(state.root, FILE_META.DESKTOP.id);

    if (desktop && isFolder(desktop)) {
        desktop.innerContent.push(file);
    }
};