import { TRANSLATION_KEYS } from "constants/translation";
import { MAX_BROWSER_TABS_COUNT, MIN_BROWSER_TABS_COUNT } from "constants/system";
import { Box } from '@mui/material';
import { useLanguage } from "hooks/useLanguage";
import { createTab } from "../../ChromeWindow.helpers";
import {
    TabCloseButton,
    TabNewButton,
    TabStyled,
    TabsWrapper,
} from "./Tabs.styled";
import type { TabsProps } from "./Tabs.types";

const Tabs = ({
    tabs,
    activeTabId,
    setActiveTabId,
    setTabs,
}: TabsProps) => {
    const { translate } = useLanguage();

    const addTab = () => {
        if (tabs.length >= MAX_BROWSER_TABS_COUNT) return;

        const newTab = createTab(translate(TRANSLATION_KEYS.NEW_TAB));

        setTabs(prev => [...prev, newTab]);
        setActiveTabId(newTab.id);
    };

    const closeTab = (id: string) => {
        if (tabs.length === MIN_BROWSER_TABS_COUNT) return;

        setTabs(prev => {
            const next = prev.filter(t => t.id !== id);

            if (id === activeTabId) {
                setActiveTabId(next[0].id);
            }

            return next;
        });
    };

    return (
        <TabsWrapper>
            {tabs.map(tab => (
                <TabStyled
                    isSelected={tab.id === activeTabId}
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                >
                    <Box>{tab.title}</Box>
                    <TabCloseButton
                        onClick={e => {
                            e.stopPropagation();
                            closeTab(tab.id);
                        }}
                    >
                        ×
                    </TabCloseButton>
                </TabStyled>
            ))}

            {tabs.length < MAX_BROWSER_TABS_COUNT && (
                <TabNewButton onClick={addTab}>
                    +
                </TabNewButton>
            )}
        </TabsWrapper>
    );
};

export default Tabs;