import { styled, Box } from "@mui/material";
import type { SelectedStyledProps } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.types";

export const LanguageModalContentWrapper = styled(Box)({
    height: "65%",
    width: "calc(100% - 12px)",
    padding: "0 6px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
});

export const LanguageModalContentItem = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isSelected",
})<SelectedStyledProps>(({ isSelected }) => ({
    display: "flex",
    position: "relative",
    height: "calc(33% - 20px)",
    width: "calc(100% - 15px)",
    padding: "18px 0 0 15px",
    borderRadius: "5px",
    background: isSelected ? "#d9d8d8" : "transparent",
    "&:hover": {
        background: "#d9d8d8",
    },
}));

export const LanguageModalSelectedMarker = styled(Box)({
    position: "absolute",
    left: "2px",
    background: "#1c88e7",
    height: "18px",
    width: "3px",
    borderRadius: "3px",
    top: "50%",
    transform: "translate(-50%, -50%)",
});