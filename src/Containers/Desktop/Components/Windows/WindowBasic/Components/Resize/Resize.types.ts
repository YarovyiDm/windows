import { DIRECTIONS_RESIZE_MAP } from "Constants/Directions";

export type ResizeProps = {
    handleResizeMouseDown: (e: React.MouseEvent, direction: typeof DIRECTIONS_RESIZE_MAP[number]["name"]) => void;
}