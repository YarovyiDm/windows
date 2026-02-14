import type { RefObject } from "react";
import type { BasicCoordinates } from "types/system";

export type SelectionProps = {
    selectionRef: RefObject<HTMLDivElement>;
    currentPosition: BasicCoordinates;
    startPosition: BasicCoordinates;
}