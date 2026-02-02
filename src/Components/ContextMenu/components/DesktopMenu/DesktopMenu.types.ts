
import type { BasicSize } from "Types/System";
import type { ContextMenuProps } from "Components/ContextMenu/ContextMenu.types";
import { FILE_TYPE } from "Types/Desktop";

export type DesktopMenuProps = {
    onDesktopFileSizeChange: ({ width, height }: BasicSize) => void;
} & Omit<ContextMenuProps, "targetId" | "setRenameFileId" | "clickedType">

export type CreateFilePayload = {
    name: string;
    type: typeof FILE_TYPE.FOLDER | typeof FILE_TYPE.TEXT;
}