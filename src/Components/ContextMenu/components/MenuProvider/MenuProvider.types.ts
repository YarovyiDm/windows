import type { BasicSize } from "Types/System";
import type { ContextMenuProps } from "Components/ContextMenu/ContextMenu.types";

export type MenuProviderProps = {
    onDesktopFileSizeChange: (newSize: BasicSize) => void;
} & ContextMenuProps;