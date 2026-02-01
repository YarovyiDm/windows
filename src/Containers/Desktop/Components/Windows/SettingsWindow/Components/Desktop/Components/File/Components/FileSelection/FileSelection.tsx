import { Box, Typography } from "@mui/material";
import FileSelectionColors
    from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Components/Colors/FileSelectionColors/FileSelectionColors";
import Icon from "Components/Icon/Icon";
import { SystemItemContentWrapper } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import { useAppSelector } from "Store/index";
import { selectFileSelectionColor } from "Store/selectors/System";
import { SettingsExample } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.styled";
import { ICONS } from "Constants/System";

const FileSelection = () => {
    const fileSelectionColor = useAppSelector(selectFileSelectionColor);

    return (
        <SystemItemContentWrapper>
            <Box display='flex' alignItems='center'>
                <Box>
                    <Typography mb={1} sx={{ color: "#fff" }}>
                        Selection file color
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