
import { FILE_TYPE } from "types/desktop";
import type { ContextMenuProps } from "Components/ContextMenu/ContextMenu.types";
import type { BasicSize } from "types/system";

export type DesktopMenuProps = {
    onDesktopFileSizeChange: ({ width, height }: BasicSize) => void;
} & Omit<ContextMenuProps, "targetId" | "setRenameFileId" | "clickedType">

export type CreateFilePayload = {
    name: string;
    type: typeof FILE_TYPE.FOLDER | typeof FILE_TYPE.TEXT;
}