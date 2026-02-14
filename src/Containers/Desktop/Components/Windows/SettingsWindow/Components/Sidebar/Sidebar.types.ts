import { SETTINGS_TAB } from "constants/settings";

export type SidebarProps = {
    activeTab: SETTINGS_TAB;
    onChange: (tab: SETTINGS_TAB) => void;
};