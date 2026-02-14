import { LANGUAGES } from "constants/languages";
import { TASKBAR_MODALS } from "constants/taskBar";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectModalStack } from "store/selectors/taskBar";
import { openModal } from "store/slices/taskBar";
import { LanguagesModal } from "Components/Modals";
import { LanguagesWrapper } from "./Languages.styled";
import type { LanguagesProps } from "./Languages.types";

const Languages = ({ refs, systemLanguageIndex }: LanguagesProps) => {
    const dispatch = useAppDispatch();
    const modalStack = useAppSelector(selectModalStack);
    const isOpened = modalStack.includes(TASKBAR_MODALS.LANGUAGES);

    return (
        <LanguagesWrapper
            isOpened={isOpened}
            ref={refs[TASKBAR_MODALS.LANGUAGES]}
            onClick={() => dispatch(openModal(TASKBAR_MODALS.LANGUAGES))}
        >
            {isOpened && <LanguagesModal />}
            {LANGUAGES[systemLanguageIndex].abbreviation}
        </LanguagesWrapper>
    );
};

export default Languages;