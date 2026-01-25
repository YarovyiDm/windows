import { BasicCoordinates, BasicSize } from "Types/System";
import { TEXT_FILE } from "Constants/System";
import { FOLDER } from "Constants/Desktop";

export type DesktopMenuProps = {
    contextMenuPosition: BasicCoordinates;
    setContextMenuVisible: (state: boolean) => void;
    clickedType: "file" | "desktop" | null;
    onDesktopFileSizeChange: ({ width, height }: BasicSize) => void;
}

export type CreateFilePayload = {
    name: string;
    type: typeof FOLDER | typeof TEXT_FILE
}