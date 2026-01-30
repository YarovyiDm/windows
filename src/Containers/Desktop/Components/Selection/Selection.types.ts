import { RefObject } from "react";
import { BasicCoordinates } from "Types/System";

export type SelectionProps = {
    selectionRef: RefObject<HTMLDivElement>;
    currentPosition: BasicCoordinates;
    startPosition: BasicCoordinates;
}