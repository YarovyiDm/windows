import { styled, Box } from "@mui/material";
import { isOpenedStylesProps } from "Containers/TaskBar/TaskBar.types";

export const StartWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isOpened",
})<isOpenedStylesProps>(({ isOpened }) => ({
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    marginRight: "10px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        background: "rgba(255, 255, 255, 0.05)",
    },
    background: isOpened ? "rgba(255, 255, 255, 0.05)" : "",
}));