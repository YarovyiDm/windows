import useLanguage from "Hooks/useLanguage";
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
                    {translate("confirmationUnsaveTitle")}
                </ConfirmationTitle>
                <ConfirmationSubTitle>
                    {translate("confirmationUnsaveSubTitle")}
                </ConfirmationSubTitle>
                <ConfirmationButtonsWrapper>
                    <ConfirmationButton onClick={() => handleSave()}>
                        {translate("save")}
                    </ConfirmationButton>
                    <ConfirmationButton onClick={() => unsaveExit()}>
                        {translate("unsave")}
                    </ConfirmationButton>
                    <ConfirmationButton onClick={onConfirmationModalChange}>
                        {translate("cancel")}
                    </ConfirmationButton>
                </ConfirmationButtonsWrapper>
            </ConfirmationModal>
        </ConfirmationWrapper>
    );
};

export default ConfirmationWithoutSaveModal;
