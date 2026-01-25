import { styled, Box } from "@mui/material";

export const StartScreenWrapper = styled(Box)({
    height: "100vh",
    width: "100vw",
    background: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    "svg": {
        width: "180px",
        height: "180px",
    },
});