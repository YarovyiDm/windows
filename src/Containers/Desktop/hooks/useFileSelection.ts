import { DOM_EVENTS } from "constants/events";
import { useRef, useState, useEffect } from "react";
import { useAppDispatch } from "store/index";
import { clearSelection, selectMultipleFiles } from "store/slices/desktop";
import type { BasicCoordinates } from "types/system";

const areArraysEqual = (a: string[], b: string[]) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};

export const useFileSelection = (selectionRef: React.RefObject<HTMLDivElement>) => {
    const [isSelecting, setIsSelecting] = useState(false);
    const startPositionRef = useRef<BasicCoordinates>({ x: 0, y: 0 });
    const currentPositionRef = useRef<BasicCoordinates>({ x: 0, y: 0 });
    const dispatch = useAppDispatch();
    const fileRectsRef = useRef<
        { name: string; rect: DOMRect; }[]
    >([]);

    const prevSelectedRef = useRef<string[]>([]);

    const startSelection = (x: number, y: number) => {
        setIsSelecting(true);

        startPositionRef.current = { x, y };
        currentPositionRef.current = { x, y };

        prevSelectedRef.current = [];

        const fileElements = Array.from(
            document.querySelectorAll('.desktop-file'),
        ) as HTMLElement[];

        fileRectsRef.current = fileElements.map(el => ({
            name: el.getAttribute('data-name')!,
            rect: el.getBoundingClientRect(),
        }));

        dispatch(clearSelection());
    };

    useEffect(() => {
        if (!isSelecting) return;

        const handleMouseMove = (e: MouseEvent) => {
            currentPositionRef.current = { x: e.clientX, y: e.clientY };

            const minX = Math.min(startPositionRef.current.x, e.clientX);
            const maxX = Math.max(startPositionRef.current.x, e.clientX);
            const minY = Math.min(startPositionRef.current.y, e.clientY);
            const maxY = Math.max(startPositionRef.current.y, e.clientY);

            const width = maxX - minX;
            const height = maxY - minY;

            if (selectionRef.current) {
                selectionRef.current.style.left = `${minX}px`;
                selectionRef.current.style.top = `${minY}px`;
                selectionRef.current.style.width = `${width}px`;
                selectionRef.current.style.height = `${height}px`;
            }

            const newSelected: string[] = [];

            fileRectsRef.current.forEach(({ name, rect }) => {
                const isIntersect =
                    rect.left < maxX &&
                    rect.right > minX &&
                    rect.top < maxY &&
                    rect.bottom > minY;

                if (isIntersect) newSelected.push(name);
            });

            if (!areArraysEqual(prevSelectedRef.current, newSelected)) {
                prevSelectedRef.current = newSelected;
                dispatch(selectMultipleFiles(newSelected));
            }
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
