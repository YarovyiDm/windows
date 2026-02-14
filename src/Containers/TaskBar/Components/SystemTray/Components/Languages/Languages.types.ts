import type { RefObject } from "react";
import type { TaskBarModal } from "types/taskBar";

export type LanguagesProps = {
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
    systemLanguageIndex: number;
}