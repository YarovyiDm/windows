import { SETTINGS_TAB } from "Constants/Settings";
import PersonalizationTab from "./PersonalizationTab/PersonalizationTab";
import SystemTab from "./SystemTab/SystemTab";
import type { ReactNode } from "react";

export const TAB_CONTENT: Record<SETTINGS_TAB, ReactNode> = {
    [SETTINGS_TAB.PERSONALIZATION]: <PersonalizationTab />,
    [SETTINGS_TAB.SYSTEM]: <SystemTab />,
};