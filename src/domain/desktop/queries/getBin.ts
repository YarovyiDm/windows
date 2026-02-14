import { FILE_META } from "constants/system";
import { isFolder } from "utils/isFolder";
import { getFileById } from "./getFileById";
import type { Desktop } from "types/desktop";

export function getBin(state: Desktop) {
    const bin = getFileById(state.root, FILE_META.BIN.id);

    if (!bin || !isFolder(bin)) {
        throw new Error("Bin folder not found or invalid");
    }

    return bin;
}