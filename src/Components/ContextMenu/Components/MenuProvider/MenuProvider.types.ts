import type { ContextMenuProps } from "Components/ContextMenu/ContextMenu.types";
import type { BasicSize } from "types/system";

export type MenuProviderProps = {
    onDesktopFileSizeChange: (newSize: BasicSize) => void;
} & ContextMenuProps;