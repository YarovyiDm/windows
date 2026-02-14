import { TRANSLATION_KEYS } from "constants/translation";
import { Box } from "@mui/material";
import { SystemItemSubTitleStyle, SystemItemWrapper } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import { useLanguage } from "hooks/useLanguage";
import FileSelection
    from "./Components/FileSelection/FileSelection";
import FileSize
    from "./Components/FileSize/FileSize";

const File = () => {
    const { translate } = useLanguage();

    return (
        <SystemItemWrapper>
            <SystemItemSubTitleStyle>{translate(TRANSLATION_KEYS.SETTINGS_WINDOW.FILE)}</SystemItemSubTitleStyle>
            <Box display='flex' flexDirection='column' gap={2}>
                <FileSelection />
                <FileSize />
            </Box>
        </SystemItemWrapper>
    );
};

export default File;