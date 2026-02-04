import { useState, useEffect } from "react";
import { BasicCoordinates, BasicSize } from "Types/System";
import { TASK_PANEL_HEIGHT, ZERO_POSITION } from "Constants/System";
import { DOM_EVENTS, MOUSE_BUTTONS } from "Constants/Events";

const useDrag = (
    initialPosition: BasicCoordinates,
    objectSize: BasicSize,
) => {
    const [position, setPosition] = useState(initialPosition);
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState(ZERO_POSITION);

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || e.buttons === MOUSE_BUTTONS.RIGHT) return;
        e.preventDefault();

        let newX = e.clientX - offset.x;
        let newY = e.clientY - offset.y;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const objectWidth = objectSize.width * 0.2;
        const objectHeight = objectSize.height * 0.2;

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX + objectWidth > windowWidth) newX = windowWidth - objectWidth;
        if (newY + (objectHeight + TASK_PANEL_HEIGHT) > windowHeight)
            newY = windowHeight - (objectHeight + TASK_PANEL_HEIGHT);

        setPosition({ x: newX, y: newY });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener(
                DOM_EVENTS.MOUSE_MOVE,
                handleMouseMove as EventListener,
            );
            document.addEventListener(DOM_EVENTS.MOUSE_UP, handleMouseUp);
        }

        return () => {
            document.removeEventListener(
                DOM_EVENTS.MOUSE_MOVE,
                handleMouseMove as EventListener,
            );
            document.removeEventListener(DOM_EVENTS.MOUSE_UP, handleMouseUp);
        };
    }, [isDragging]);

    return {
        position,
        handleMouseDown,
        setPosition,
    };
};

export default useDrag;
