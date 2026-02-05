import { LanguagesProps } from "Containers/TaskBar/Components/SystemTray/Components/Languages/Languages.types";
import { LanguagesModal } from "Components/Modals";
import { LanguagesWrapper } from "Containers/TaskBar/Components/SystemTray/Components/Languages/Languages.styled";
import { LANGUAGES } from "Constants/Languages";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectModalStack } from "Store/selectors/TaskBar";
import { TASKBAR_MODALS } from "Constants/Taskbar";
import { openModal } from "Store/slices/TaskBar";

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