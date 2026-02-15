import { WINDOW_META } from "constants/system";
import { TRANSLATION_KEYS } from "constants/translation";
import { SETTINGS_TAB } from "constants/settings";
import { useState } from "react";
import { WINDOW_KIND } from "types/desktop";
import { selectWindowZindex } from "store/selectors/desktop";
import { useAppSelector } from "store/index";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { useLanguage } from "hooks/useLanguage";
import SettingsSidebar from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Sidebar/SIdebar";
import { TAB_CONTENT } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Tabs/tabsContent";
import {
    SettingsWrapper,
    SidebarWrapper,
    AnimatedContent,
    ContentInner,
} from "./SettingsWindow.styled";

const SettingsWindow = ({ initialTab }:{initialTab?: (typeof SETTINGS_TAB)[keyof typeof SETTINGS_TAB];}) => {
    const { translate } = useLanguage();
    const [activeTab, setActiveTab] = useState<SETTINGS_TAB>(initialTab ?? SETTINGS_TAB.PERSONALIZATION);
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
