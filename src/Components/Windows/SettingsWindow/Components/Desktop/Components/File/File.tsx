import { Box } from "@mui/material";

import { SystemItemSubTitleStyle, SystemItemWrapper } from "Components/Windows/SettingsWindow/SettingsWindow.styled";
import FileSize
    from "Components/Windows/SettingsWindow/Components/Desktop/Components/File/Components/FileSize/FileSize";
import FileSelection
    from "Components/Windows/SettingsWindow/Components/Desktop/Components/File/Components/FileSelection/FileSelection";

const File = () => {
    return (
        <SystemItemWrapper>
            <SystemItemSubTitleStyle>File</SystemItemSubTitleStyle>
            <Box display='flex' flexDirection='column' gap={2}>
                <FileSelection />
                <FileSize />
            </Box>
        </SystemItemWrapper>
    );
};

export default File;