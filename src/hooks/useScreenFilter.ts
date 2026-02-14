import { type RefObject, useEffect } from "react";

export const useScreenFilter = (ref: RefObject<HTMLElement>, brightness: number, isNightMode: boolean) => {
    useEffect(() => {
        if (!ref.current) return;
        ref.current.style.filter = isNightMode
            ? "sepia(0.3) brightness(0.6) contrast(1.2)"
            : `brightness(${brightness})`;
    }, [ref, brightness, isNightMode]);
};