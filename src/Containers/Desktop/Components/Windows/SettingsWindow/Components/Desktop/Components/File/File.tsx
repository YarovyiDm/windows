import { Box } from "@mui/material";
import { SystemItemSubTitleStyle, SystemItemWrapper } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import FileSelection
    from "./Components/FileSelection/FileSelection";
import FileSize
    from "./Components/FileSize/FileSize";

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