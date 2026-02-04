import { DesktopFile } from "Types/Desktop";
import { openWindow } from "Store/slices/Desktop";
import { AppDispatch } from "Store/index";
import { mapFileToWindow } from "../helpers/mapFileToWindow";

export const openFile = (
    file: DesktopFile,
    dispatch: AppDispatch,
) => {
    const window = mapFileToWindow(file);

    dispatch(openWindow(window));
};