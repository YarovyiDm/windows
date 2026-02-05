import { RefObject } from "react";
import { TaskBarModal } from "Types/TaskBar";

export type WindowsModalProps = {
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
}