import React from "react";
import { Box } from '@mui/material';
import { TRANSLATION_KEYS } from "Constants/Translation";
import { useLanguage } from "Hooks/useLanguage";
import { createTab } from "../../ChromeWindow.helpers";
import {
    TabCloseButton, TabNewButton,
    TabStyled,
    TabsWrapper,
} from "./Tabs.styled";
import { TabsProps } from "./Tabs.types";

const Tabs = ({ tabs, activeTabId, setActiveTabId, setTabs }: TabsProps) => {
    const { translate } = useLanguage();

    const addTab = () => {
        if (tabs.length >= 5) return;

        const newTab = createTab(translate(TRANSLATION_KEYS.NEW_TAB));

        setTabs(prev => [...prev, newTab]);
        setActiveTabId(newTab.id);
    };

    const closeTab = (id: string) => {
        if (tabs.length === 1) return;

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

            {tabs.length < 5 && (
                <TabNewButton onClick={addTab}>
                    +
                </TabNewButton>
            )}
        </TabsWrapper>
    );
};

export default Tabs;