import { TRANSLATION_KEYS } from "constants/translation";
import { Typography, Box } from "@mui/material";
import { useAppSelector } from "store/index";
import { selectSelectionStyles } from "store/selectors/system";
import {
    SystemItemContentWrapper,
    SystemItemSubTitleStyle,
    SystemItemWrapper,
} from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import { useLanguage } from "hooks/useLanguage";
import BorderColors from "../Colors/BorderColors/BorderColors";
import AreaColors from "../Colors/AreaColors/AreaColors";
import { SettingsExample } from "../../Desktop.styled";

const SelectionArea = () => {
    const selectionStyles = useAppSelector(selectSelectionStyles);
    const { translate } = useLanguage();

    return (
        <SystemItemWrapper>
            <SystemItemSubTitleStyle>{translate(TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA)}</SystemItemSubTitleStyle>
            <SystemItemContentWrapper>
                <Box display='flex' flexDirection='column' gap={2}>
                    <Box>
                        <Typography sx={{ color: "#fff" }} mb={1}>
                            {translate(TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA_BORDER_COLOR)}
                        </Typography>
                        <Box display='flex'>
                            <BorderColors />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ color: "#fff" }} mb={1}>
                            {translate(TRANSLATION_KEYS.SETTINGS_WINDOW.SELECTION_AREA_COLOR)}
                        </Typography>
                        <Box display='flex'>
                            <AreaColors />
                        </Box>
                    </Box>
                </Box>
                <SettingsExample
                    sx={{
                        border: `solid 3px ${selectionStyles.borderColor}`,
                        background: selectionStyles.areaColor,
                    }}
                />

            </SystemItemContentWrapper>
        </SystemItemWrapper>
    );
};

export default SelectionArea;