import { TASK_PANEL_HEIGHT, ZERO_POSITION } from "constants/system";
import { MIN_WINDOW_HEIGHT, MIN_WINDOW_WIDTH } from "constants/desktop";
import { DIRECTIONS } from "constants/directions";
import { DOM_EVENTS } from "constants/events";
import { useEffect, useRef, useState } from "react";
import type { BasicCoordinates, BasicSize } from "types/system";

export const useResize = (
    initialSize: BasicSize,
    setPosition: ({ x, y }: BasicCoordinates) => void,
    position: BasicCoordinates,
    initialFullscreen = false,
    disableFullscreenOnDoubleClick?: boolean,
) => {
    const [size, setSize] = useState<BasicSize>(() =>
        initialFullscreen
            ? {
                width: window.innerWidth,
                height: window.innerHeight - TASK_PANEL_HEIGHT,
            }
            : initialSize,
    );

    const [isResizing, setIsResizing] = useState(false);
    const [resizeDirection, setResizeDirection] = useState("");
    const [startPos, setStartPos] = useState(ZERO_POSITION);
    const [startSize, setStartSize] = useState(size);
    const [isFullscreen, setIsFullscreen] = useState(initialFullscreen);

    const prevSizeRef = useRef<BasicSize>(initialSize);
    const prevPositionRef = useRef<BasicCoordinates>(position);

    useEffect(() => {
        if (initialFullscreen) {
            setPosition(ZERO_POSITION);
        }
    }, []);

    const toggleFullscreen = () => {
        if (isFullscreen) {
            setSize(prevSizeRef.current);
            setPosition(prevPositionRef.current);
        } else {
            prevSizeRef.current = size;
            prevPositionRef.current = position;

            setPosition(ZERO_POSITION);
            setSize({
                width: window.innerWidth,
                height: window.innerHeight - TASK_PANEL_HEIGHT,
            });
        }

        setIsFullscreen(prev => !prev);
    };

    const handleResizeMouseDown = (e: React.MouseEvent, direction: string) => {
        e.preventDefault();

        if (isFullscreen) {
            setIsFullscreen(false);
        }

        setIsResizing(true);
        setResizeDirection(direction);
        setStartPos({ x: e.clientX, y: e.clientY });
        setStartSize(size);
    };

    const handleResizeMouseMove = (e: MouseEvent) => {
        if (!isResizing) return;

        const deltaX = e.clientX - startPos.x;
        const deltaY = e.clientY - startPos.y;

        setSize(() => {
            let newWidth = startSize.width;
            let newHeight = startSize.height;

            if (resizeDirection.includes(DIRECTIONS.RIGHT)) {
                newWidth = Math.max(
                    MIN_WINDOW_WIDTH,
                    Math.min(window.innerWidth, startSize.width + deltaX),
                );
            }

            if (resizeDirection.includes(DIRECTIONS.BOTTOM)) {
                const maxHeight = window.innerHeight - TASK_PANEL_HEIGHT;

                newHeight = Math.max(
                    MIN_WINDOW_HEIGHT,
                    Math.min(maxHeight, startSize.height + deltaY),
                );
            }

            return { width: newWidth, height: newHeight };
        });
    };

    const handleResizeMouseUp = () => {
        setIsResizing(false);
        setResizeDirection("");
    };

    const handleDoubleClick = () => {
        if (!disableFullscreenOnDoubleClick) {
            toggleFullscreen();
        }
    };

    useEffect(() => {
        if (!isResizing) return;

        document.addEventListener(
            DOM_EVENTS.MOUSE_MOVE,
            handleResizeMouseMove as EventListener,
        );
        document.addEventListener(
            DOM_EVENTS.MOUSE_UP,
            handleResizeMouseUp as EventListener,
        );

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
        size,
        isFullscreen,
        toggleFullscreen,
        handleResizeMouseDown,
        handleDoubleClick,
    };
};
