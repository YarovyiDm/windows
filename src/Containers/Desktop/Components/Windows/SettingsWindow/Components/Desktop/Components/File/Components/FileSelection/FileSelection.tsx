import { ICONS } from "constants/icons";
import { TRANSLATION_KEYS } from "constants/translation";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "store/index";
import { selectFileSelectionColor } from "store/selectors/system";
import Icon from "Components/Icon/Icon";
import { SystemItemContentWrapper } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import { SettingsExample } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.styled";
import { useLanguage } from "hooks/useLanguage";
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