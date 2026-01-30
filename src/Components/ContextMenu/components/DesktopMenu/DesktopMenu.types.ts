import { FOLDER } from "Constants/Desktop";
import { TEXT_FILE } from "Constants/System";
import type { BasicSize } from "Types/System";
import type { ContextMenuProps } from "Components/ContextMenu/ContextMenu.types";

export type DesktopMenuProps = {
    onDesktopFileSizeChange: ({ width, height }: BasicSize) => void;
} & Omit<ContextMenuProps, "targetId" | "setRenameFileId" | "clickedType">

export type CreateFilePayload = {
    name: string;
    type: typeof FOLDER | typeof TEXT_FILE;
}