import { styled, Box } from "@mui/material";

export const DraggableFileCopyWrapper = styled(Box)({
    width: "40px",
    height: "40px",
    position: "fixed",
    pointerEvents: "none",
    zIndex: "200",
    transform: "translate(-50%, -50%)",
});