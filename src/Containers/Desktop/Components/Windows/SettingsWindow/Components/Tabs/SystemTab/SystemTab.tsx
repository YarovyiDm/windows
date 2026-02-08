import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    BlockHeader,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic.styled";
import SystemInformation
    from "Containers/Desktop/Components/Windows/SettingsWindow/Components/SystemInformation/SystemInformation";
import { AccordionStyled } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import { useLanguage } from "Hooks/useLanguage";
import { TRANSLATION_KEYS } from "Constants/Translation";
import Language from "../../../Components/Language/Language";
import Display from "../../../Components/Display/Display";

const SystemTab = () => {
    const { translate } = useLanguage();

    return (
        <>
            <AccordionStyled>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <BlockHeader>{translate(TRANSLATION_KEYS.SETTINGS_WINDOW.DISPLAY)}</BlockHeader>
                </AccordionSummary>
                <AccordionDetails>
                    <Display />
                </AccordionDetails>
            </AccordionStyled>
            <AccordionStyled>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <BlockHeader>{translate(TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM_LANGUAGE)}</BlockHeader>
                </AccordionSummary>
                <AccordionDetails>
                    <Language />
                </AccordionDetails>
            </AccordionStyled>

            <AccordionStyled>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <BlockHeader>{translate(TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM_INFORMATION)}</BlockHeader>
                </AccordionSummary>
                <AccordionDetails>
                    <SystemInformation />
                </AccordionDetails>
            </AccordionStyled>
        </>
    );
};

export default SystemTab;
