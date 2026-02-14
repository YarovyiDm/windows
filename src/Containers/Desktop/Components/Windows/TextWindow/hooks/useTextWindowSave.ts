import { DOM_EVENTS } from "constants/events";
import { KEY_CODES } from "constants/keyCodes";
import { SHOW_SAVE_MESSAGE_DELAY } from "constants/system";
import { useEffect, useState } from "react";
import { useAppDispatch } from "store";
import { closeWindow, updateFileInRoot } from "store/slices/desktop";
import type { DesktopWindow } from "types/desktop";

type Params = {
    desktopWindow: DesktopWindow;
    isFileChanged: boolean;
    fileValue: string;
    commitSave: () => void;
};

export const useTextWindowSave = ({
    desktopWindow,
    isFileChanged,
    fileValue,
    commitSave,
}: Params) => {
    const dispatch = useAppDispatch();
    const [showSaveMessage, setShowSaveMessage] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleSave = () => {
        if (!isFileChanged) return;
        commitSave();
        showConfirmationModal && unsaveExit();

        if("fileId" in desktopWindow && desktopWindow.fileId) {
            dispatch(updateFileInRoot({
                id: desktopWindow.fileId,
                newValue: fileValue,
            }));
        }

        setShowSaveMessage(true);

        setTimeout(() => {
            setShowSaveMessage(false);
        }, SHOW_SAVE_MESSAGE_DELAY);

    };

    const unsaveExit = () => {
        dispatch(closeWindow(desktopWindow.id));
        setShowConfirmationModal(false);
    };

    const toggleConfirmationModal = () => {
        setShowConfirmationModal(prev => !prev);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.code === KEY_CODES.S) {
                e.preventDefault();
                handleSave();
            }
        };

        window.addEventListener(DOM_EVENTS.KEY_DOWN, handleKeyDown);
        return () =>
            window.removeEventListener(DOM_EVENTS.KEY_DOWN, handleKeyDown);
    }, [handleSave]);

    return {
        handleSave,
        unsaveExit,
        showSaveMessage,
        showConfirmationModal,
        toggleConfirmationModal,
    };
};
