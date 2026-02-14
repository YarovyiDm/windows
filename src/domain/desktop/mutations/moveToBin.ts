import type { Desktop, DesktopFile } from "types/desktop";
import { getBin } from "../queries/getBin";
import { detachFile } from "./detachFile";

export function moveToBin(state: Desktop, fileId: string): DesktopFile | null {
    const file = detachFile(state.root, fileId);

    if (!file) return null;

    const bin = getBin(state);

    bin.innerContent.push(file);

    return file;
}
