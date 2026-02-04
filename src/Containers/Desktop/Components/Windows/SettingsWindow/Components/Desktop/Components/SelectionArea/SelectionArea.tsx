import { Typography, Box } from "@mui/material";
import {
    SystemItemContentWrapper,
    SystemItemSubTitleStyle,
    SystemItemWrapper,
} from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import { useAppSelector } from "Store/index";
import { selectSelectionStyles } from "Store/selectors/System";
import BorderColors
    from "../Colors/BorderColors/BorderColors";
import AreaColors from "../Colors/AreaColors/AreaColors";
import { SettingsExample } from "../../Desktop.styled";

const SelectionArea = () => {
    const selectionStyles = useAppSelector(selectSelectionStyles);

    return (
        <SystemItemWrapper>
            <SystemItemSubTitleStyle>Selection area</SystemItemSubTitleStyle>
            <SystemItemContentWrapper>
                <Box display='flex' flexDirection='column' gap={2}>
                    <Box>
                        <Typography sx={{ color: "#fff" }} mb={1}>
                            Border color
                        </Typography>
                        <Box display='flex'>
                            <BorderColors />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ color: "#fff" }} mb={1}>
                            Area color
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