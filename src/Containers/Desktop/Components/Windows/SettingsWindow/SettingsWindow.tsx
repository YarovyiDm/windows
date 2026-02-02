import { useState } from "react";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BrushIcon from '@mui/icons-material/Brush';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { useAppSelector } from "Store/index";
import { selectSettingsWindowId } from "Store/selectors/System";
import {
    BlockHeader,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic.styled";
import { WINDOW_KIND } from "Types/Desktop";
import SystemInformation from "./Components/SystemInformation/SystemInformation";
import Display from "./Components/Display/Display";
import Desktop from "./Components/Desktop/Desktop";
import Wallpapers from "./Components/Wallpapers/Wallpapers";
import {
    SettingsWrapper,
    SidebarWrapper,
    TabsContainer,
    TabButton,
    AnimatedContent,
    ContentInner, AccordionStyled,
} from "./SettingsWindow.styled";

type Tab = "Personalization" | "System";

const SettingsWindow = () => {
    const settingsID = useAppSelector(selectSettingsWindowId);
    const [activeTab, setActiveTab] = useState<Tab>("Personalization");

    const renderTabContent = () => {
        switch (activeTab) {
        case "Personalization":
            return (
                <>
                    <AccordionStyled>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <BlockHeader>Wallpapers</BlockHeader>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Wallpapers />
                        </AccordionDetails>
                    </AccordionStyled>

                    <AccordionStyled>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <BlockHeader>Desktop</BlockHeader>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Desktop />
                        </AccordionDetails>
                    </AccordionStyled>
                </>
            );
        case "System":
            return (
                <>
                    <AccordionStyled>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <BlockHeader>Display</BlockHeader>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Display />
                        </AccordionDetails>
                    </AccordionStyled>

                    <AccordionStyled>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <BlockHeader>System Information</BlockHeader>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SystemInformation />
                        </AccordionDetails>
                    </AccordionStyled>
                </>
            );
        default:
            return null;
        }
    };

    return (
        <WindowBasic title='Settings' id='settings' kind={WINDOW_KIND.SETTINGS}>
            <SettingsWrapper>
                <SidebarWrapper>
                    <TabsContainer>
                        <TabButton active={activeTab === "Personalization"} onClick={() => setActiveTab("Personalization")}>
                            <BrushIcon />Personalization
                        </TabButton>
                        <TabButton active={activeTab === "System"} onClick={() => setActiveTab("System")}>
                            <TvOutlinedIcon />System
                        </TabButton>
                    </TabsContainer>
                </SidebarWrapper>
                <AnimatedContent>
                    <ContentInner key={activeTab}>
                        {renderTabContent()}
                    </ContentInner>
                </AnimatedContent>
            </SettingsWrapper>
        </WindowBasic>
    );
};

export default SettingsWindow;
