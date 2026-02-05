import { RefObject } from "react";
import { TaskBarModal } from "Types/TaskBar";

export type LanguagesProps = {
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
    systemLanguageIndex: number;
}