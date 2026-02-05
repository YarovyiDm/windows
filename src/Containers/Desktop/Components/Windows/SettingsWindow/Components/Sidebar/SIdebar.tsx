import { TabButton, TabsContainer } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import { SETTINGS_TABS } from "Constants/Settings";
import { SidebarProps } from "./Sidebar.types";

const SettingsSidebar = ({ activeTab, onChange }: SidebarProps) => {
    return (
        <TabsContainer>
            {SETTINGS_TABS.map(({ id, label, icon: Icon }) => (
                <TabButton
                    key={id}
                    active={activeTab === id}
                    onClick={() => onChange(id)}
                >
                    <Icon />
                    {label}
                </TabButton>
            ))}
        </TabsContainer>
    );
};

export default SettingsSidebar;