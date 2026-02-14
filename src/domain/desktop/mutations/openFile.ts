import { createWindowFromFile } from "domain/desktop/factory/createWindowFromFile";
import { WINDOW_ZINDEX_MULTIPLIER } from "constants/system";
import { openWindow } from "store/slices/desktop";
import type { DesktopFile } from "types/desktop";
import type { AppDispatch } from "store/index";

export const openFile = (
    file: DesktopFile,
    dispatch: AppDispatch,
    zIndex: number,
) => {
    const window = createWindowFromFile(file, zIndex * WINDOW_ZINDEX_MULTIPLIER);

    dispatch(openWindow(window));
};