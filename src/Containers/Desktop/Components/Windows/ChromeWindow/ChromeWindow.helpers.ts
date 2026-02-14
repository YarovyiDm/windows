import type { ChromeTab } from "./ChromeWindow.types";

export const createTab = (title: string): ChromeTab => ({
    id: crypto.randomUUID(),
    title,
    url: "https://www.google.com/webhp?igu=1",
});