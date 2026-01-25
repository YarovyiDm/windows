import { BasicCoordinates, BasicSize } from "Types/System";
import { Dispatch, SetStateAction } from "react";

export type MenuProviderProps = {
    contextMenuPosition: BasicCoordinates;
    setContextMenuVisible: (state: boolean) => void;
    clickedType: "file" | "desktop" | null;
    onDesktopFileSizeChange: (newSize: BasicSize) => void;
    targetId: string | null;
    setRenameFileId: Dispatch<SetStateAction<string>>
};