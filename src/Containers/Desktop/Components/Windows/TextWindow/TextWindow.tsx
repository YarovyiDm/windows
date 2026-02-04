import { useMemo, useState, useEffect, ChangeEvent } from "react";
import { Box } from '@mui/material';
import { useLanguage } from "Hooks";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { useAppDispatch } from "Store/index";
import { closeWindow, updateFile } from "Store/slices/Desktop";
import ConfirmationWithoutSaveModal from "Components/Modals/ConfirmationWithoutSaveModal/ConfirmationWithoutSaveModal";
import {
    TextWindowFileFormat,
    TextWindowFooter,
    TextWindowSaveMessage,
    TextWindowWrapper,
} from "Containers/Desktop/Components/Windows/TextWindow/TextWindow.styled";
import { WINDOW_KIND } from "Types/Desktop";
import { SHOW_SAVE_MESSAGE_DELAY } from "Constants/System";
import { KEY_CODES } from "Constants/KeyCodes";
import { DOM_EVENTS } from "Constants/Events";
import { TRANSLATION_KEYS } from "Constants/Translation";
import type { TextWindowProps } from "./TextWindow.types";

const TextWindow = ({
    desktopWindow,
}: TextWindowProps) => {
    const [fileValue, setFileValue] = useState(()  => {
        if("content" in desktopWindow.payload) {
            return desktopWindow.payload.content;
        }
        return "";
    });
    const [prevFileValue, setPrevFileValue] = useState(()  => {
        if("content" in desktopWindow.payload) {
            return desktopWindow.payload.content;
        }
        return "";
    });
    const [showSaveMessage, setShowSaveMessage] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const { translate } = useLanguage();

    const dispatch = useAppDispatch();
    const isFileChanged = useMemo(
        () => fileValue !== prevFileValue,
        [fileValue, prevFileValue],
    );

    const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFileValue(e.currentTarget.value);
    };

    const handleSave = () => {
        if (isFileChanged) {
            setPrevFileValue(fileValue);
            showConfirmationModal && unsaveExit();

            if("fileId" in desktopWindow && desktopWindow.fileId) {
                dispatch(updateFile({
                    id: desktopWindow.fileId,
                    newValue: fileValue,
                }));
            }

            setShowSaveMessage(true);

            setTimeout(() => {
                setShowSaveMessage(false);
            }, SHOW_SAVE_MESSAGE_DELAY);
        }
    };

    const unsaveExit = () => {
        dispatch(closeWindow(desktopWindow.id));
        onConfirmationModalChange();
    };

    const onConfirmationModalChange = () => {
        setShowConfirmationModal(prev => !prev);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.code === KEY_CODES.S) {
                e.preventDefault();
                handleSave();
            }
        };

        window.addEventListener(DOM_EVENTS.KEY_DOWN, handleKeyDown as EventListener);

        return () => {
            window.removeEventListener(
                DOM_EVENTS.KEY_DOWN,
                handleKeyDown as EventListener,
            );
        };
    }, [fileValue, prevFileValue]);

    return (
        <WindowBasic
            title={desktopWindow.title}
            id={desktopWindow.id}
            kind={WINDOW_KIND.TEXT}
            onCloseCallback={isFileChanged && onConfirmationModalChange}
            zIndex={desktopWindow.zIndex}
        >
            <TextWindowWrapper>
                {showConfirmationModal && (
                    <ConfirmationWithoutSaveModal
                        handleSave={handleSave}
                        unsaveExit={unsaveExit}
                        onConfirmationModalChange={onConfirmationModalChange}
                    />
                )}

                <textarea
                    value={fileValue}
                    onChange={e => onTextAreaChange(e)}
                />
                {showSaveMessage && (
                    <TextWindowSaveMessage>
                        {translate(TRANSLATION_KEYS.SAVED)}
                    </TextWindowSaveMessage>
                )}
                <TextWindowFooter>
                    <Box>
                        C:\Users\Beast\Desktop\{desktopWindow.title}.txt
                    </Box>
                    <TextWindowFileFormat>
                        <Box sx={{ width: '42px', color: '#127fb5' }}>
                            {isFileChanged &&
                                translate(TRANSLATION_KEYS.CHANGED)}
                        </Box>
                        <Box>Windows (CRLF)</Box>
                        <Box>UTF-8</Box>
                    </TextWindowFileFormat>
                </TextWindowFooter>
            </TextWindowWrapper>
        </WindowBasic>
    );
};

export default TextWindow;
