import { ModalNames, ObjectOfModalRefs } from "Types/TaskPanelTypes";

export type IProps = {
    hiddenAppsModalOpen: boolean;
    isLanguagesModalOpen: boolean;
    systemLanguageIndex: number;
    refs: ObjectOfModalRefs;
    handleModalChange: (name: ModalNames) => void;
}