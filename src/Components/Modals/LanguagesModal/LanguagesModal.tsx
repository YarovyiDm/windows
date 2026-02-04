import { useLanguage } from "Hooks";
import { TRANSLATION_KEYS } from "Constants/Translation";
import {
    LanguageModalHeaderWrapper,
    LanguageModalHotKeysItem,
    LanguageModalHotKeysWrapper,
    LanguageModalTitle,
    LanguageModalWrapper,
} from "./LanguageModal.styled";
import LanguageModalContent from "./Components/LanguageModalContent/LanguageModalContent";

const LanguagesModal = () => {
    const { translate } = useLanguage();

    return (
        <LanguageModalWrapper>
            <LanguageModalHeaderWrapper>
                <LanguageModalTitle>
                    {translate(TRANSLATION_KEYS.KEYBOARD_LAYOUT)}
                </LanguageModalTitle>
                <LanguageModalHotKeysWrapper>
                    <LanguageModalHotKeysItem>Shift</LanguageModalHotKeysItem>+
                    <LanguageModalHotKeysItem>Alt</LanguageModalHotKeysItem>
                </LanguageModalHotKeysWrapper>
            </LanguageModalHeaderWrapper>
            <LanguageModalContent />
        </LanguageModalWrapper>
    );
};

export default LanguagesModal;
