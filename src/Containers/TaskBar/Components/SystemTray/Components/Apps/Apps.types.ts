import { RefObject } from "react";
import { TaskBarModal } from "Types/TaskBar";

export type AppsProps = {
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
}