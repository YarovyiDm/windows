import type { RefObject } from "react";
import type { TaskBarModal } from "types/taskBar";

export type AppsProps = {
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
}