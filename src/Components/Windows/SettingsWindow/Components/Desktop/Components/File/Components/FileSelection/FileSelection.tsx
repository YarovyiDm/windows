import { Box, Typography } from "@mui/material";
import FileSelectionColors
    from "Components/Windows/SettingsWindow/Components/Desktop/Components/Colors/FileSelectionColors/FileSelectionColors";
import Icon from "Components/Icon/Icon";
import { TEXT_FILE } from "Constants/System";
import { SystemItemContentWrapper } from "Components/Windows/SettingsWindow/SettingsWindow.styled";
import { useAppSelector } from "Store/index";
import { selectFileSelectionColor } from "Store/selectors/System";
import { SettingsExample } from "Components/Windows/SettingsWindow/Components/Desktop/Desktop.styled";

const FileSelection = () => {
    const fileSelectionColor = useAppSelector(selectFileSelectionColor);

    return (
        <SystemItemContentWrapper>
            <Box display='flex' alignItems='center'>
                <Box>
                    <Typography mb={1}>
                        Selection file color
                    </Typography>
                    <Box display='flex'>
                        <FileSelectionColors />
                    </Box>
                </Box>
                <SettingsExample
                    style={{
                        background: fileSelectionColor,
                        marginLeft: "50px",
                    }}
                >
                    <Icon name={TEXT_FILE} />
                </SettingsExample>
            </Box>
        </SystemItemContentWrapper>
    );
};

export default FileSelection;