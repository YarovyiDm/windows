import { DOM_EVENTS } from "constants/events";
import { useRef, useState, useEffect } from "react";
import { useAppDispatch } from "store/index";
import { selectMultipleFiles, clearSelection } from "store/slices/desktop";
import type { BasicCoordinates } from "types/system";

export const useFileSelection = () => {
    const [isSelecting, setIsSelecting] = useState(false);
    const startPositionRef = useRef<BasicCoordinates>({ x: 0, y: 0 });
    const currentPositionRef = useRef<BasicCoordinates>({ x: 0, y: 0 });
    const dispatch = useAppDispatch();

    const startSelection = (x: number, y: number) => {
        setIsSelecting(true);
        startPositionRef.current = { x, y };
        currentPositionRef.current = { x, y };
        dispatch(clearSelection());
    };

    useEffect(() => {
        if (!isSelecting) return;

        const handleMouseMove = (e: MouseEvent) => {
            currentPositionRef.current = { x: e.clientX, y: e.clientY };
            const fileElements = Array.from(document.querySelectorAll('.desktop-file')) as HTMLElement[];
            const newSelected: string[] = [];

            fileElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const isIntersect =
                    rect.left < Math.max(startPositionRef.current.x, currentPositionRef.current.x) &&
                    rect.right > Math.min(startPositionRef.current.x, currentPositionRef.current.x) &&
                    rect.top < Math.max(startPositionRef.current.y, currentPositionRef.current.y) &&
                    rect.bottom > Math.min(startPositionRef.current.y, currentPositionRef.current.y);

                if (isIntersect) {
                    const fileName = el.getAttribute('data-name');

                    if (fileName) newSelected.push(fileName);
                }
            });
            dispatch(selectMultipleFiles(newSelected));
        };

        const handleMouseUp = () => setIsSelecting(false);

        document.addEventListener(DOM_EVENTS.MOUSE_MOVE, handleMouseMove);
        document.addEventListener(DOM_EVENTS.MOUSE_UP, handleMouseUp);

        return () => {
            document.removeEventListener(DOM_EVENTS.MOUSE_MOVE, handleMouseMove);
            document.removeEventListener(DOM_EVENTS.MOUSE_UP, handleMouseUp);
        };
    }, [isSelecting, dispatch]);

    return { isSelecting, startPositionRef, currentPositionRef, setIsSelecting, startSelection };
};
