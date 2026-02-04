import { ChromeTab } from "Containers/Desktop/Components/Windows/ChromeWindow/ChromeWindow.types";

export const createTab = (title: string): ChromeTab => ({
    id: crypto.randomUUID(),
    title,
    url: "https://www.google.com/webhp?igu=1",
});