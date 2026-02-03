import { styled, Box } from "@mui/material";
import type {
    SelectedStyledProps,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.types";

export const TabsWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    height: 36,
    background: "#2b2b2b",
    borderBottom: "1px solid #1e1e1e",
    padding: "0 6px",
    gap: 4,
    userSelect: "none",
});

export const TabStyled = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isSelected",
})<SelectedStyledProps>(({ isSelected }) => ({
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 10px",
    background: isSelected ? "#202020" : "transparent",
    color: "#ddd",
    borderRadius: "6px 6px 0 0",
    cursor: "pointer",
    fontSize: 13,
    maxWidth: 160,
    overflow: "hidden",
    whiteSpace: "nowrap",
    border: "solid 2px #202020",
    "&:hover": {
        background: "#202020",
    },
}));

export const TabCloseButton = styled(Box)({
    marginLeft: 6,
    background: "transparent",
    border: "none",
    color: "#aaa",
    cursor: "pointer",
    fontSize: 14,
    lineHeight: 1,
});

export const TabNewButton = styled("button")({
    marginLeft: 6,
    width: 26,
    height: 26,
    borderRadius: 6,
    border: "none",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    fontSize: 18,
    lineHeight: "26px",
    "&:hover": {
        background: "#3a3a3a",
    },
});