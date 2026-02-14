import type { RefObject } from "react";
import type { TaskBarModal } from "types/taskBar";

export type StartProps = {
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
}