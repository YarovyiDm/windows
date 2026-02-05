import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    BlockHeader,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic.styled";
import SystemInformation
    from "Containers/Desktop/Components/Windows/SettingsWindow/Components/SystemInformation/SystemInformation";
import { AccordionStyled } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import Display from "../../../Components/Display/Display";

const SystemTab = () => {
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
};

export default SystemTab;
