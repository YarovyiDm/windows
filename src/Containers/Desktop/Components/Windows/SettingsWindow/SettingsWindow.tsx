import { useState } from "react";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { WINDOW_KIND } from "Types/Desktop";
import { WINDOW_META } from "Constants/System";
import { TRANSLATION_KEYS } from "Constants/Translation";
import { useLanguage } from "Hooks/useLanguage";
import { selectWindowZindex } from "Store/selectors/Desktop";
import { useAppSelector } from "Store/index";
import SettingsSidebar from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Sidebar/SIdebar";
import { SETTINGS_TAB } from "Constants/Settings";
import { TAB_CONTENT } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Tabs/tabsContent";
import {
    SettingsWrapper,
    SidebarWrapper,
    AnimatedContent,
    ContentInner,
} from "./SettingsWindow.styled";

const SettingsWindow = () => {
    const { translate } = useLanguage();
    const [activeTab, setActiveTab] = useState<SETTINGS_TAB>(SETTINGS_TAB.PERSONALIZATION);
    const zIndex = useAppSelector(selectWindowZindex(WINDOW_META.SETTINGS.id));

    return (
        <WindowBasic zIndex={zIndex} title={translate(TRANSLATION_KEYS.SETTINGS)} id={WINDOW_META.SETTINGS.id} kind={WINDOW_KIND.SETTINGS}>
            <SettingsWrapper>
                <SidebarWrapper>
                    <SettingsSidebar activeTab={activeTab} onChange={setActiveTab}/>
                </SidebarWrapper>
                <AnimatedContent>
                    <ContentInner key={activeTab}>
                        {TAB_CONTENT[activeTab]}
                    </ContentInner>
                </AnimatedContent>
            </SettingsWrapper>
        </WindowBasic>
    );
};

export default SettingsWindow;
