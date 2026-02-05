import { Box } from "@mui/material";
import { useLanguage } from "Hooks";
import { TRANSLATION_KEYS } from "Constants/Translation";
import {
    TextWindowFooter,
    TextWindowFileFormat,
} from "../../TextWindow.styled";
import { FooterProps } from "./Footer.types";

const Footer = ({ title, isFileChanged }: FooterProps) => {
    const { translate } = useLanguage();

    return (
        <TextWindowFooter>
            <Box>C:\Users\Beast\Desktop\{title}.txt</Box>
            <TextWindowFileFormat>
                <Box sx={{ width: "42px", color: "#127fb5" }}>
                    {isFileChanged &&
                        translate(TRANSLATION_KEYS.CHANGED)}
                </Box>
                <Box>Windows (CRLF)</Box>
                <Box>UTF-8</Box>
            </TextWindowFileFormat>
        </TextWindowFooter>
    );
};

export default Footer;