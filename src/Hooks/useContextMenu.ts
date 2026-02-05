import { useState, MouseEvent } from "react";
import { DEFAULT_DESKTOP_CONTEXT_MENU_WIDTH } from "Constants/Desktop";
import type { BasicCoordinates } from "Types/System";
import { CONTEXT_MENU_TYPES, ZERO_POSITION } from "Constants/System";
import { MOUSE_BUTTONS } from "Constants/Events";

type ContextType = keyof typeof CONTEXT_MENU_TYPES | null;

export const useContextMenu = () => {
    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] =
        useState<BasicCoordinates>(ZERO_POSITION);

    const [clickedType, setClickedType] = useState<ContextType>(null);
    const [targetId, setTargetId] = useState<string | null>(null);

    const handleContextMenu = (
        e: MouseEvent<HTMLDivElement>,
    ) => {
        if (e.button === MOUSE_BUTTONS.RIGHT) {
            e.preventDefault();

            const target = e.target as HTMLElement;
            const contextEl = target.closest("[data-context]") as HTMLElement;
            const id = contextEl?.dataset.id ?? null;

            setTargetId(id);

            const type = contextEl?.dataset.context;

            setClickedType(type as ContextType);

            const menuWidth = DEFAULT_DESKTOP_CONTEXT_MENU_WIDTH;
            let x = e.clientX;
            const y = e.clientY;

            if (x + menuWidth > window.innerWidth) {
                x = e.clientX - menuWidth;
            }

            setContextMenuPosition({ x, y });
            setContextMenuVisible(true);
        }
    };

    return {
        contextMenuVisible,
        contextMenuPosition,
        clickedType,
        handleContextMenu,
        setContextMenuVisible,
        targetId,
    };
};
