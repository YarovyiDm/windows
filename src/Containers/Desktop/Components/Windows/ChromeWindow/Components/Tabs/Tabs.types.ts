import type { ChromeTab } from "../../ChromeWindow.types";
import type { Dispatch, SetStateAction } from "react";

export type TabsProps = {
    tabs: ChromeTab[];
    activeTabId: string;
    setActiveTabId: Dispatch<SetStateAction<string>>;
    setTabs: Dispatch<SetStateAction<ChromeTab[]>>;
}