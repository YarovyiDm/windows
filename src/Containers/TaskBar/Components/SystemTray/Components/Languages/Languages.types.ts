import { ModalNames, ObjectOfModalRefs } from "Types/TaskPanelTypes";

export type LanguagesProps = {
    refs: ObjectOfModalRefs;
    isLanguagesModalOpen: boolean;
    handleModalChange: (name: ModalNames) => void;
    systemLanguageIndex: number;
}