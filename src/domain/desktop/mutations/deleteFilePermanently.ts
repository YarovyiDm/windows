import type { Desktop } from "types/desktop";
import { getBin } from "../queries/getBin";

export const deleteFilePermanently = (state: Desktop, fileId: string)=> {
    const bin = getBin(state);

    bin.innerContent = bin.innerContent.filter(
        file => file.id !== fileId,
    );
};