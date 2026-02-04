import type { BasicCoordinates } from "Types/System";

export const getSelectionStyles = ({ currentPosition, startPosition }:{currentPosition: BasicCoordinates; startPosition: BasicCoordinates;}) => {
    const width = Math.abs(currentPosition.x - startPosition.x);
    const height = Math.abs(currentPosition.y - startPosition.y);
    const left = Math.min(startPosition.x, currentPosition.x);
    const top = Math.min(startPosition.y, currentPosition.y);

    return {
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`,
    };
};