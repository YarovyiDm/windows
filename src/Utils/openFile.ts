import { DesktopFile } from "Types/Desktop";
import { openWindow } from "Store/slices/Desktop";
import { AppDispatch } from "Store/index";
import { WINDOW_ZINDEX_MULTIPLIER } from "Constants/System";
import { mapFileToWindow } from "../helpers/mapFileToWindow";

export const openFile = (
    file: DesktopFile,
    dispatch: AppDispatch,
    zIndex: number,
) => {
    const window = mapFileToWindow(file, zIndex * WINDOW_ZINDEX_MULTIPLIER);

    dispatch(openWindow(window));
};