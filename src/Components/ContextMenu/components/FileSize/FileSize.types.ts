import { BasicSize } from "Types/System";

export type IProps = {
    selectedSize: BasicSize,
    onDesktopFileSizeChange: ({ width, height }: BasicSize) => void;
}