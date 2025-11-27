import { Dispatch, SetStateAction, useState } from "react";

import { DEFAULT_DESKTOP_CONTEXT_MENU_WIDTH } from "Constants/Desktop";
import { RIGHT_MOUSE_BUTTON_CODE, ZERO_POSITION } from "Constants/System";

type Position = { x: number; y: number };
type ContextType = "file" | "desktop" | null;

export const useContextMenu = () => {
    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] =
        useState<Position>(ZERO_POSITION);

    const [clickedType, setClickedType] = useState<ContextType>(null);
    const [targetId, setTargetId] = useState<string | null>(null);

    const handleContextMenu = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        if (e.button === RIGHT_MOUSE_BUTTON_CODE) {
            e.preventDefault();

            const target = e.target as HTMLElement;

            // шукаємо найближчий елемент з data-context
            const contextEl = target.closest("[data-context]") as HTMLElement;
            const id = contextEl?.dataset.id ?? null;

            setTargetId(id);

            const type = contextEl?.dataset.context ?? "desktop";

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
