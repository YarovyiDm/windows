import { styled, Box } from "@mui/material";
import { isOpenedStylesProps } from "Containers/TaskBar/TaskBar.types";

export const WidgetWrapper = styled(Box, {
    shouldForwardProp: prop => prop !== "isOpened",
})<isOpenedStylesProps>(({ isOpened }) => ({
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    gap: 50,
    left: "15px",
    bottom: "62px",
    width: 420,
    height: "fit-content",
    background: "linear-gradient(135deg, #5f4bd8, #3a7bd5)",
    borderRadius: "16px",
    transform: isOpened
        ? "translateX(0)"
        : "translateX(-110%)",
    opacity: isOpened ? 1 : 0,
    transition: "transform 0.35s ease, opacity 0.25s ease",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    pointerEvents: isOpened ? "auto" : "none",
    zIndex: 1300,
    padding: "30px",
    color: "white",
    svg: {
        width: "15px",
        height: "15px",
    },
}));
