import { FILE_META } from "constants/system";
import { isFolder } from "utils/isFolder";
import { getFileById } from "../queries/getFileById";
import type { Desktop, DesktopFile } from "types/desktop";

export const attachFile = (state: Desktop, file: DesktopFile) => {
    const desktop = getFileById(state.root, FILE_META.DESKTOP.id);

    if (desktop && isFolder(desktop)) {
        desktop.innerContent.push(file);
    }
};