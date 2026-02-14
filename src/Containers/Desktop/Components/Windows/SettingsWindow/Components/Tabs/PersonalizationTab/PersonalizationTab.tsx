import { TRANSLATION_KEYS } from "constants/translation";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    BlockHeader,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic.styled";
import { AccordionStyled } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import Wallpapers from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Wallpapers/Wallpapers";
import { useLanguage } from "hooks/useLanguage";
import Desktop from "../../../Components/Desktop/Desktop";

const PersonalizationTab = () => {
    const { translate } = useLanguage();

    return (
        <>
            <AccordionStyled>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <BlockHeader>{translate(TRANSLATION_KEYS.SETTINGS_WINDOW.WALLPAPERS)}</BlockHeader>
                </AccordionSummary>
                <AccordionDetails>
                    <Wallpapers />
                </AccordionDetails>
            </AccordionStyled>

            <AccordionStyled>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <BlockHeader>{translate(TRANSLATION_KEYS.SETTINGS_WINDOW.DESKTOP)}</BlockHeader>
                </AccordionSummary>
                <AccordionDetails>
                    <Desktop />
                </AccordionDetails>
            </AccordionStyled>
        </>
    );
};

export default PersonalizationTab;