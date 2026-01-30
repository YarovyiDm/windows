import { ObjectOfModalRefs } from "Types/TaskPanelTypes";

export type MainProps = {
    refs: ObjectOfModalRefs;
    setCurrentModal: (name: string) => void;
}