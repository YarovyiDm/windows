import { BasicSize } from "Types/System";

export type FileSizeProps = {
    selectedSize: BasicSize,
    onDesktopFileSizeChange: ({ width, height }: BasicSize) => void;
}