import { DOM_EVENTS } from "constants/events";
import  { type RefObject, useEffect } from "react";

export const useClickOutside = (
    ref: RefObject<HTMLElement> | null,
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
