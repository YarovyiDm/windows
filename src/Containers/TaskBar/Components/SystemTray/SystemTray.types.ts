import type { RefObject } from "react";
import type { TaskBarModal } from "types/taskBar";

export type SystemTrayProps = {
    systemLanguageIndex: number;
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
}