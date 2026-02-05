import { SETTINGS_TAB } from "Constants/Settings";

export type SidebarProps = {
    activeTab: SETTINGS_TAB;
    onChange: (tab: SETTINGS_TAB) => void;
};