import { DIRECTIONS_RESIZE_MAP } from "constants/directions";

export type ResizeProps = {
    handleResizeMouseDown: (e: React.MouseEvent, direction: typeof DIRECTIONS_RESIZE_MAP[number]["name"]) => void;
}