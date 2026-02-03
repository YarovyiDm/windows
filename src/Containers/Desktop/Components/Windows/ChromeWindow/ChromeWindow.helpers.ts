import { ChromeTab } from "Containers/Desktop/Components/Windows/ChromeWindow/ChromeWindow.types";

export const createTab = (): ChromeTab => ({
    id: crypto.randomUUID(),
    title: "New Tab",
    url: "https://www.google.com/webhp?igu=1",
});