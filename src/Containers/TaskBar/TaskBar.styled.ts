import { styled, Box } from "@mui/material";

export const TaskBarWrapper = styled(Box)({
    height: "50px",
    width: "calc(100% - 100px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#c5c5c5",
    borderTop: "solid 1px #d3d3d3",
    zIndex: "9999",
    padding: "0 50px",
});
