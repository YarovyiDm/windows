import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectOpenedWindowLength } from "Store/selectors/Desktop";
import { KEY_CODES } from "Constants/KeyCodes";
import { removeFile } from "Store/slices/Desktop";
import { DOM_EVENTS } from "Constants/Events";
import { openFile } from "Utils/openFile";
import { DesktopFile } from "Types/Desktop";

type Props = {
    file: DesktopFile;
    isSelected: boolean;
}

export const useFileKeyboard = ({ file, isSelected }: Props) => {
    const dispatch = useAppDispatch();
    const openedWindowsLength = useAppSelector(selectOpenedWindowLength);

    useEffect(() => {
        if (!isSelected) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.code === KEY_CODES.DELETE) dispatch(removeFile(file.id));
            if (e.key === KEY_CODES.ENTER) {
                openFile(file, dispatch, openedWindowsLength);
            }
        };

        document.addEventListener(DOM_EVENTS.KEY_DOWN, onKeyDown);
        return () => document.removeEventListener(DOM_EVENTS.KEY_DOWN, onKeyDown);
    }, [isSelected, file, dispatch, openedWindowsLength]);
};