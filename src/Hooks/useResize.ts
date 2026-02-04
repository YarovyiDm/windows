import { useEffect, useState } from "react";
import type { BasicCoordinates, BasicSize } from "Types/System";
import { TASK_PANEL_HEIGHT, ZERO_POSITION } from "Constants/System";
import { MIN_WINDOW_HEIGHT, MIN_WINDOW_WIDTH } from "Constants/Desktop";
import { DIRECTIONS } from "Constants/Directions";
import { DOM_EVENTS } from "Constants/Events";

export const useResize = (
    initialSize: BasicSize,
    setPosition: ({ x, y }: BasicCoordinates) => void,
    position: BasicCoordinates,
) => {
    const [size, setSize] = useState({
        width: initialSize.width,
        height: initialSize.height,
    });
    const [isResizing, setIsResizing] = useState(false);
    const [resizeDirection, setResizeDirection] = useState("");
    const [startPos, setStartPos] = useState(ZERO_POSITION);
    const [startSize, setStartSize] = useState(size);
    const [prevSize, setPrevSize] = useState(size);
    const [prevPosition, setPrevPosition] = useState(position);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleResizeMouseUp = () => {
        setIsResizing(false);
        setResizeDirection("");
    };

    const toggleFullscreen = () => {
        if (isFullscreen) {
            setSize(prevSize);
            setPosition(prevPosition);
        } else {
            setPrevSize(size);
            setPrevPosition(position);
            setPosition(ZERO_POSITION);
            setSize({
                width: window.innerWidth,
                height: window.innerHeight - TASK_PANEL_HEIGHT,
            });
        }
        setIsFullscreen(!isFullscreen);
    };

    const handleResizeMouseDown = (e: React.MouseEvent, direction: string) => {
        e.preventDefault();
        setIsResizing(true);
        setResizeDirection(direction);
        setStartPos({ x: e.clientX, y: e.clientY });
        setStartSize(size);
    };

    const handleDoubleClick = () => {
        toggleFullscreen();
    };

    const handleResizeMouseMove = (e: MouseEvent) => {
        if (!isResizing) return;

        const deltaX = e.clientX - startPos.x;
        const deltaY = e.clientY - startPos.y;

        setSize(prevSize => {
            let newWidth = startSize.width;
            let newHeight = startSize.height;

            if (resizeDirection.includes(DIRECTIONS.RIGHT)) {
                const windowWidth = window.innerWidth;

                newWidth = Math.max(
                    MIN_WINDOW_WIDTH,
                    Math.min(windowWidth, startSize.width + deltaX),
                );
            }
            if (resizeDirection.includes(DIRECTIONS.BOTTOM)) {
                const windowHeight = window.innerHeight;

                newHeight = Math.max(
                    MIN_WINDOW_HEIGHT,
                    Math.min(
                        windowHeight - TASK_PANEL_HEIGHT,
                        startSize.height + deltaY,
                    ),
                );

                if (newHeight + position.y > windowHeight - TASK_PANEL_HEIGHT) {
                    newHeight = windowHeight - TASK_PANEL_HEIGHT - position.y;
                }
            }

            return { width: newWidth, height: newHeight };
        });
    };

    useEffect(() => {
        if (isResizing) {
            document.addEventListener(
                DOM_EVENTS.MOUSE_MOVE,
                handleResizeMouseMove as EventListener,
            );
            document.addEventListener(
                DOM_EVENTS.MOUSE_UP,
                handleResizeMouseUp as EventListener,
            );
        }

        return () => {
            document.removeEventListener(
                DOM_EVENTS.MOUSE_MOVE,
                handleResizeMouseMove as EventListener,
            );
            document.removeEventListener(
                DOM_EVENTS.MOUSE_UP,
                handleResizeMouseUp as EventListener,
            );
        };
    }, [isResizing]);

    return {
        handleResizeMouseDown,
        handleDoubleClick,
        size,
        toggleFullscreen,
        isFullscreen,
    };
};
