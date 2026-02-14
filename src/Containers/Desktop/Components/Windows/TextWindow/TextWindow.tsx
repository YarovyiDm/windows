import { TRANSLATION_KEYS } from "constants/translation";
import { useLanguage } from "hooks";
import { WINDOW_KIND } from "types/desktop";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import ConfirmationWithoutSaveModal from "Components/Modals/ConfirmationWithoutSaveModal/ConfirmationWithoutSaveModal";
import {
    TextWindowSaveMessage,
    TextWindowWrapper,
} from "./TextWindow.styled";
import Footer from "./Components/Footer/Footer";
import { useTextWindowSave } from "./hooks/useTextWindowSave";
import { useTextWindowState } from "./hooks/useTextWindowState";
import type { TextWindowProps } from "./TextWindow.types";

const TextWindow = ({
    desktopWindow,
}: TextWindowProps) => {
    const initialValue =
        "content" in desktopWindow.payload
            ? desktopWindow.payload.content
            : "";

    const {
        fileValue,
        setFileValue,
        isFileChanged,
        commitSave,
    } = useTextWindowState(initialValue as string);

    const {
        handleSave,
        unsaveExit,
        showSaveMessage,
        showConfirmationModal,
        toggleConfirmationModal,
    } = useTextWindowSave({
        desktopWindow,
        isFileChanged,
        fileValue,
        commitSave,
    });

    const { translate } = useLanguage();

    return (
        <WindowBasic
            title={desktopWindow.title}
            id={desktopWindow.id}
            kind={WINDOW_KIND.TEXT}
            onCloseCallback={isFileChanged && toggleConfirmationModal}
            zIndex={desktopWindow.zIndex}
        >
            <TextWindowWrapper>
                {showConfirmationModal && (
                    <ConfirmationWithoutSaveModal
                        handleSave={handleSave}
                        unsaveExit={unsaveExit}
                        onConfirmationModalChange={toggleConfirmationModal}
                    />
                )}

                <textarea
                    value={fileValue}
                    onChange={e => setFileValue(e.target.value)}
                />

                {showSaveMessage && (
                    <TextWindowSaveMessage>
                        {translate(TRANSLATION_KEYS.SAVED)}
                    </TextWindowSaveMessage>
                )}

                <Footer
                    title={desktopWindow.title}
                    isFileChanged={isFileChanged}
                />
            </TextWindowWrapper>
        </WindowBasic>
    );
};

export default TextWindow;
