import type { RefObject } from "react";
import type { TaskBarModal } from "types/taskBar";

export type WindowsModalProps = {
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
}