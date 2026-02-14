import type { DesktopWindow } from "types/desktop";

export const bringWindowToFront = (windows: DesktopWindow[], windowId: string) => {
    const current = windows.find(w => w.id === windowId);

    if (!current) return;

    windows.forEach((w, i) => (w.zIndex = i + 2));
    current.zIndex = 99;
};