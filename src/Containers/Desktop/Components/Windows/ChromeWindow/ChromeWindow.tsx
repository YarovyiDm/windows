import React, { useState } from "react";
import { Box } from "@mui/material";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { FILE_TYPE, WINDOW_KIND } from "Types/Desktop";
import { ChromeTab } from "Containers/Desktop/Components/Windows/ChromeWindow/ChromeWindow.types";
import { createTab } from "Containers/Desktop/Components/Windows/ChromeWindow/ChromeWindow.helpers";
import Tabs from "Containers/Desktop/Components/Windows/ChromeWindow/Components/Tabs/Tabs";
import { IFrameStyled } from "Containers/Desktop/Components/Windows/ChromeWindow/ChromeWindow.styled";

const ChromeWindow = () => {
    const [tabs, setTabs] = useState<ChromeTab[]>([createTab()]);
    const [activeTabId, setActiveTabId] = useState<string>(tabs[0].id);

    return (
        <WindowBasic
            title='Google Chrome'
            id={FILE_TYPE.BROWSER}
            kind={WINDOW_KIND.BROWSER}
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
