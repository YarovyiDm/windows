import type { BasicSize } from "types/system";

export type FileSizeProps = {
    selectedSize: BasicSize;
    onDesktopFileSizeChange: ({ width, height }: BasicSize) => void;
}