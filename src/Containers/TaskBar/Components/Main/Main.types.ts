import { RefObject } from "react";
import { TaskBarModal } from "Types/TaskBar";

export type MainProps = {
    refs: Record<TaskBarModal, RefObject<HTMLDivElement>>;
}