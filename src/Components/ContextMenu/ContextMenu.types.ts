import { BasicCoordinates } from "Types/System";
import { Dispatch, SetStateAction } from "react";

export type IProps = {
    contextMenuPosition: BasicCoordinates;
    setContextMenuVisible: (state: boolean) => void;
    clickedType: "file" | "desktop" | null;
    targetId: string | null;
    setRenameFileId: Dispatch<SetStateAction<string>>
};