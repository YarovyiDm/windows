import { styled } from "@mui/material";
import type {
    SelectedStyledProps,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.types";

export const IFrameStyled = styled("iframe", {
    shouldForwardProp: (prop) => prop !== "isSelected",
})<SelectedStyledProps>(({ isSelected }) => ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    border: "none",
    display: isSelected ? "block" : "none",
}));