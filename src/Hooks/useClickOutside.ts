import React, { useEffect } from "react";
import { DOM_EVENTS } from "Constants/Events";

export const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void,
) => {
    const handleClick = (e: Event) => {
        if (!ref) {
            return;
        }
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener(DOM_EVENTS.MOUSE_DOWN, handleClick);
        return () => {
            document.removeEventListener(DOM_EVENTS.MOUSE_DOWN, handleClick);
        };
    }, [ref]);
};
