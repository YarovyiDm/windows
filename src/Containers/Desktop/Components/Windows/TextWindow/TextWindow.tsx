import { useMemo, useState, useEffect, ChangeEvent } from "react";
import { Box } from '@mui/material';
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import {
    DOM_EVENTS,
    KEY_CODES,
    SHOW_SAVE_MESSAGE_DELAY, WINDOW_TYPES,
} from "Constants/System";
import { useAppDispatch } from "Store/index";
import { closeWindow, updateFile } from "Store/slices/Desktop";
import ConfirmationWithoutSaveModal from "Components/Modals/ConfirmationWithoutSaveModal/ConfirmationWithoutSaveModal";
import useLanguage from "Hooks/useLanguage";
import {
    TextWindowFileFormat,
    TextWindowFooter,
    TextWindowSaveMessage,
    TextWindowWrapper,
} from "Containers/Desktop/Components/Windows/TextWindow/TextWindow.styled";
import { getTextSize } from "../../../../../utils/getTextSize";
import type { TextWindowProps } from "./TextWindow.types";

const TextWindow = ({
    name,
    content,
    id,
}: TextWindowProps) => {
    const [fileValue, setFileValue] = useState(content);
    const [prevFileValue, setPrevFileValue] = useState(content);
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
            dispatch(updateFile({ id, newValue: fileValue, size: getTextSize(fileValue) }));
            showConfirmationModal && unsaveExit();

            setShowSaveMessage(true);

            setTimeout(() => {
                setShowSaveMessage(false);
            }, SHOW_SAVE_MESSAGE_DELAY);
        }
    };

    const unsaveExit = () => {
        dispatch(closeWindow(id));
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
            name={name}
            id={id}
            type={WINDOW_TYPES.TEXT_FILE}
            onCloseCallback={isFileChanged && onConfirmationModalChange}
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
                        {translate("textFileWasSaved")}
                    </TextWindowSaveMessage>
                )}
                <TextWindowFooter>
                    <Box>
                        C:\Users\Beast\Desktop\{name}.txt
                    </Box>
                    <TextWindowFileFormat>
                        <Box sx={{ width: '42px', color: '#127fb5' }}>
                            {isFileChanged &&
                                translate("textFileWasChangeMarker")}
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
