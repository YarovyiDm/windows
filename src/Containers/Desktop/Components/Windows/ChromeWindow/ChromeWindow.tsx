import React, { useState } from "react";
import { Box } from "@mui/material";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { WINDOW_KIND } from "Types/Desktop";
import { WINDOW_META } from "Constants/System";
import { useLanguage } from "Hooks/useLanguage";
import { TRANSLATION_KEYS } from "Constants/Translation";
import { useAppSelector } from "Store/index";
import { selectWindowZindex } from "Store/selectors/Desktop";
import { ChromeTab } from "./ChromeWindow.types";
import Tabs from "./Components/Tabs/Tabs";
import { IFrameStyled } from "./ChromeWindow.styled";
import { createTab } from "./ChromeWindow.helpers";

const ChromeWindow = () => {
    const { translate } = useLanguage();
    const [tabs, setTabs] = useState<ChromeTab[]>([createTab(translate(TRANSLATION_KEYS.NEW_TAB))]);
    const [activeTabId, setActiveTabId] = useState<string>(tabs[0].id);
    const zIndex = useAppSelector(selectWindowZindex(WINDOW_META.BROWSER.id));

    return (
        <WindowBasic
            zIndex={zIndex}
            title={WINDOW_META.BROWSER.title}
            id={WINDOW_META.BROWSER.id}
            kind={WINDOW_KIND.BROWSER}
            fullscreen
        >
            <Tabs setTabs={setTabs} tabs={tabs} setActiveTabId={setActiveTabId} activeTabId={activeTabId}/>
            <Box sx={{ position: "relative", width: "100%", height: "calc(100% - 50px)" }}>
                {tabs.map(tab => (
                    <IFrameStyled
                        title={tab.id}
                        key={tab.id}
                        src={tab.url}
                        isSelected={tab.id === activeTabId}
                    />
                ))}
            </Box>
        </WindowBasic>
    );
};

export default ChromeWindow;
