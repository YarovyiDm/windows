import { ModalNames, ObjectOfModalRefs } from "Types/TaskPanelTypes";

export type AppsProps = {
    refs: ObjectOfModalRefs;
    hiddenAppsModalOpen: boolean;
    handleModalChange: (name: ModalNames) => void;
}