import { styled, Box } from "@mui/material";
import { SelectedStyledProps } from "Components/Windows/SettingsWindow/Components/Desktop/Desktop.types";

export const WallpapersStyled = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isSelected",
})<SelectedStyledProps>(({ isSelected }) => ({
    minWidth: "250px",
    borderRadius: "8px",
    height: "120px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    "&:hover": {
        outline: "solid 3px #09677b",
    },

    "&:not(:last-of-type)": {
        marginRight: "10px",
    },
    outline: isSelected ? "solid 3px #09677b" : "solid 3px rgba(0, 0, 0, 0)",

}));