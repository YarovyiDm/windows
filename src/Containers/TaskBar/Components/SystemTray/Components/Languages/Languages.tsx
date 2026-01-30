import { LanguagesProps } from "Containers/TaskBar/Components/SystemTray/Components/Languages/Languages.types";
import { LanguagesModal } from "Components/Modals";
import { LANGUAGES } from "Constants/System";
import { LanguagesWrapper } from "Containers/TaskBar/Components/SystemTray/Components/Languages/Languages.styled";

const Languages = ({ refs, isLanguagesModalOpen, handleModalChange, systemLanguageIndex }: LanguagesProps) => {
    return (
        <LanguagesWrapper
            isOpened={isLanguagesModalOpen}
            ref={refs.isLanguagesModalOpen}
            onClick={() => handleModalChange("isLanguagesModalOpen")}
        >
            {isLanguagesModalOpen && <LanguagesModal />}
            {LANGUAGES[systemLanguageIndex].abbreviation}
        </LanguagesWrapper>
    );
};

export default Languages;