import { styled, Box } from "@mui/material";
import type { SelectedStyledProps } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.types";

export const WallpapersStyled = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isSelected",
})<SelectedStyledProps>(({ isSelected }) => ({
    minWidth: "250px",
    borderRadius: "8px",
    height: "120px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    cursor: "pointer",
    "&:hover": {
        outline: "solid 3px #fff",
    },

    "&:not(:last-of-type)": {
        marginRight: "10px",
    },
    outline: isSelected ? "solid 3px #fff" : "solid 3px rgba(0, 0, 0, 0)",
}));