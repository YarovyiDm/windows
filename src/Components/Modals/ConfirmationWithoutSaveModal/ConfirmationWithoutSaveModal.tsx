import { TRANSLATION_KEYS } from "constants/translation";
import { useLanguage } from "hooks";
import {
    ConfirmationButton,
    ConfirmationButtonsWrapper,
    ConfirmationModal,
    ConfirmationSubTitle,
    ConfirmationTitle,
    ConfirmationWrapper,
} from "./ConfirmationWithoutSaveModal.styled";
import type { ConfirmationWithoutSaveModalProps } from "./ConfirmationWithoutSaveModal.types";

const ConfirmationWithoutSaveModal = ({
    handleSave,
    unsaveExit,
    onConfirmationModalChange,
}: ConfirmationWithoutSaveModalProps) => {
    const { translate } = useLanguage();

    return (
        <ConfirmationWrapper>
            <ConfirmationModal>
                <ConfirmationTitle>
                    {translate(TRANSLATION_KEYS.UNSAVE_TITLE)}
                </ConfirmationTitle>
                <ConfirmationSubTitle>
                    {translate(TRANSLATION_KEYS.UNSAVE_SUBTITLE)}
                </ConfirmationSubTitle>
                <ConfirmationButtonsWrapper>
                    <ConfirmationButton onClick={() => handleSave()}>
                        {translate(TRANSLATION_KEYS.SAVE)}
                    </ConfirmationButton>
                    <ConfirmationButton onClick={() => unsaveExit()}>
                        {translate(TRANSLATION_KEYS.UNSAVE)}
                    </ConfirmationButton>
                    <ConfirmationButton onClick={onConfirmationModalChange}>
                        {translate(TRANSLATION_KEYS.CANSEL)}
                    </ConfirmationButton>
                </ConfirmationButtonsWrapper>
            </ConfirmationModal>
        </ConfirmationWrapper>
    );
};

export default ConfirmationWithoutSaveModal;
