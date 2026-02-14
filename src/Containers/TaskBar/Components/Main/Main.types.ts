import type { RefObject } from "react";
import type { TaskBarModal } from "types/taskBar";

export type MainProps = {
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
}