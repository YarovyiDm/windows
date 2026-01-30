import { ModalNames, ObjectOfModalRefs } from "Types/TaskPanelTypes";

export type StartProps = {
    refs: ObjectOfModalRefs;
    isWindowsModalOpen: boolean;
    handleModalChange: (name: ModalNames) => void;
}