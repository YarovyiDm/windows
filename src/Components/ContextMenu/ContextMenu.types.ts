import type { BasicCoordinates } from "Types/System";
import type { Dispatch, SetStateAction } from "react";

export type ContextMenuProps = {
    contextMenuPosition: BasicCoordinates;
    setContextMenuVisible: (state: boolean) => void;
    clickedType: "file" | "desktop" | null;
    targetId: string | null;
    setRenameFileId: Dispatch<SetStateAction<string>>;
};