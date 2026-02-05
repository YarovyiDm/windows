import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    BlockHeader,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic.styled";
import { AccordionStyled } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import Wallpapers from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Wallpapers/Wallpapers";
import Desktop from "../../../Components/Desktop/Desktop";

const PersonalizationTab = () => {
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
};

export default PersonalizationTab;