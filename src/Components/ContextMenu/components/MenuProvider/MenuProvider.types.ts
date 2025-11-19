import { BasicCoordinates, BasicSize } from "Types/System";

export type IProps = {
    contextMenuPosition: BasicCoordinates;
    setContextMenuVisible: (state: boolean) => void;
    clickedType: "file" | "desktop" | null;
    onDesktopFileSizeChange: (newSize: BasicSize) => void;
};