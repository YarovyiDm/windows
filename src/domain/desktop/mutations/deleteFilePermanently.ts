import { getBin } from "../queries/getBin";
import type { Desktop } from "types/desktop";

export const deleteFilePermanently = (state: Desktop, fileId: string)=> {
    const bin = getBin(state);

    bin.innerContent = bin.innerContent.filter(
        file => file.id !== fileId,
    );
};