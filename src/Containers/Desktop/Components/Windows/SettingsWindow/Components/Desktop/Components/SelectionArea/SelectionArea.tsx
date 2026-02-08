import { Typography, Box } from "@mui/material";
import {
    SystemItemContentWrapper,
    SystemItemSubTitleStyle,
    SystemItemWrapper,
} from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import { useAppSelector } from "Store/index";
import { selectSelectionStyles } from "Store/selectors/System";
import { useLanguage } from "Hooks/useLanguage";
import { TRANSLATION_KEYS } from "Constants/Translation";
import BorderColors
    from "../Colors/BorderColors/BorderColors";
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