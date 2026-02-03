import { styled, Box } from "@mui/material";

export const TaskBarWrapper = styled(Box)({
    height: "60px",
    flex: 1,
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#202020",
    zIndex: "9999",
    padding: "0 50px",
});
