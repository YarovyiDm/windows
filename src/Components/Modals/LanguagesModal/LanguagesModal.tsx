import useLanguage from "Hooks/useLanguage";
import {
    LanguageModalHeaderWrapper, LanguageModalHotKeysItem, LanguageModalHotKeysWrapper,
    LanguageModalTitle,
    LanguageModalWrapper,
} from "Components/Modals/LanguagesModal/LanguageModal.styled";
import LanguageModalContent
    from "Components/Modals/LanguagesModal/Components/LanguageModalContent/LanguageModalContent";

const LanguagesModal = () => {
    const { translate } = useLanguage();

    return (
        <LanguageModalWrapper>
            <LanguageModalHeaderWrapper>
                <LanguageModalTitle>
                    {translate("keyboardLayout")}
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
