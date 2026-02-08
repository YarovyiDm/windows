import { Box, Typography } from "@mui/material";
import Icon from "Components/Icon/Icon";
import { SystemItemContentWrapper } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import { useAppSelector } from "Store/index";
import { selectFileSelectionColor } from "Store/selectors/System";
import { SettingsExample } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.styled";
import { ICONS } from "Constants/Icons";
import { useLanguage } from "Hooks/useLanguage";
import { TRANSLATION_KEYS } from "Constants/Translation";
import FileSelectionColors
    from "../../../../Components/Colors/FileSelectionColors/FileSelectionColors";

const FileSelection = () => {
    const fileSelectionColor = useAppSelector(selectFileSelectionColor);
    const { translate } = useLanguage();

    return (
        <SystemItemContentWrapper>
            <Box display='flex' alignItems='flex-start'>
                <Box>
                    <Typography mb={1} sx={{ color: "#fff" }}>
                        {translate(TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_FILE_COLOR)}
                    </Typography>
                    <Box display='flex'>
                        <FileSelectionColors />
                    </Box>
                </Box>
                <SettingsExample
                    sx={{
                        background: fileSelectionColor,
                        marginLeft: "50px",
                    }}
                >
                    <Icon name={ICONS.TEXT_FILE} />
                </SettingsExample>
            </Box>
        </SystemItemContentWrapper>
    );
};

export default FileSelection;