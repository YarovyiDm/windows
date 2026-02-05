import { RefObject } from "react";
import { TaskBarModal } from "Types/TaskBar";

export type SystemTrayProps = {
    systemLanguageIndex: number;
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
}