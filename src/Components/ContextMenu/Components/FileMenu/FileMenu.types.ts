import type { ContextMenuProps } from "Components/ContextMenu/ContextMenu.types";

export type FileMenuProps = Pick<ContextMenuProps, "targetId" | "setRenameFileId"> & { setContextMenuVisible: (state: boolean) => void; }
