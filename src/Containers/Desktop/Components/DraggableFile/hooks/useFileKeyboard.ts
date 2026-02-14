import { openFile } from "domain/desktop/mutations/openFile";
import { KEY_CODES } from "constants/keyCodes";
import { DOM_EVENTS } from "constants/events";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectOpenedWindowLength } from "store/selectors/desktop";
import { removeFile } from "store/slices/desktop";
import type { DesktopFile } from "types/desktop";

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