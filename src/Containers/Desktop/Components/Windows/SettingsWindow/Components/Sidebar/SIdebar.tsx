import { TabButton, TabsContainer } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import { SETTINGS_TABS } from "Constants/Settings";
import { useLanguage } from "Hooks/useLanguage";
import { SidebarProps } from "./Sidebar.types";

const SettingsSidebar = ({ activeTab, onChange }: SidebarProps) => {
    const { translate } = useLanguage();

    return (
        <TabsContainer>
            {SETTINGS_TABS.map(({ id, label, icon: Icon }) => (
                <TabButton
                    key={id}
                    active={activeTab === id}
                    onClick={() => onChange(id)}
                >
                    <Icon />
                    {translate(label)}
                </TabButton>
            ))}
        </TabsContainer>
    );
};

export default SettingsSidebar;