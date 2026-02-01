
import type { BasicSize } from "Types/System";
import type { ContextMenuProps } from "Components/ContextMenu/ContextMenu.types";
import { WINDOW_TYPES } from "Constants/System";

export type DesktopMenuProps = {
    onDesktopFileSizeChange: ({ width, height }: BasicSize) => void;
} & Omit<ContextMenuProps, "targetId" | "setRenameFileId" | "clickedType">

export type CreateFilePayload = {
    name: string;
    type: typeof WINDOW_TYPES.FOLDER | typeof WINDOW_TYPES.TEXT_FILE;
}