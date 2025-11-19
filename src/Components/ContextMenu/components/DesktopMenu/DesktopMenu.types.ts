import { BasicCoordinates, BasicSize } from "Types/System";

export type IProps = {
    contextMenuPosition: BasicCoordinates;
    setContextMenuVisible: (state: boolean) => void;
    clickedType: "file" | "desktop" | null;
    onDesktopFileSizeChange: ({ width, height }: BasicSize) => void;
}