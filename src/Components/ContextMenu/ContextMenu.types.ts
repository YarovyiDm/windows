import { CONTEXT_MENU_TYPES } from "constants/system";
import type { BasicCoordinates } from "types/system";
import type { Dispatch, SetStateAction } from "react";

export type ContextMenuProps = {
    contextMenuPosition: BasicCoordinates;
    setContextMenuVisible: (state: boolean) => void;
    clickedType: keyof typeof CONTEXT_MENU_TYPES | null;
    targetId: string | null;
    setRenameFileId: Dispatch<SetStateAction<string>>;
};