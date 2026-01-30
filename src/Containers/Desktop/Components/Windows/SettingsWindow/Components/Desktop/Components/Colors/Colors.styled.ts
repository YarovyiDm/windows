import { styled, Box } from "@mui/material";
import type { SelectedStyledProps } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.types";

export const Color = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isSelected",
})<SelectedStyledProps>(({ isSelected }) => ({
    height: "20px",
    width: "20px",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
        outline: "solid 2px #09677b",
    },
    "&:not(:last-of-type)": {
        marginRight: "10px",
    },
    outline: isSelected ? "solid 3px #09677b" : 'solid 1px rgba(0, 0, 0, 0)',
}));