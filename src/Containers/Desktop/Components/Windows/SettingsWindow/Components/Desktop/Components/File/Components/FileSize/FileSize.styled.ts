import { styled, Box } from "@mui/material";
import type { SelectedStyledProps } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.types";

export const FileSizeItem = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
});

export const FileSizeTitle = styled(Box)({
    fontSize: "14px",
    marginTop: "5px",
});

export const FileItem = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isSelected",
})<SelectedStyledProps>(({ isSelected }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    borderRadius: "5px",
    "svg": {
        width: "30px",
        height: "30px",
    },
    "&:hover": {
        outline: "solid 3px #fff",
    },
    outline: isSelected ? "solid 3px #fff" : '',
}));