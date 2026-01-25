import { styled, Box } from "@mui/material";

export const SystemQuitScreenWrapper = styled(Box)({
    background: "#0077d6",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
});

export const SystemQuitScreenStatus = styled(Box)({
    marginTop: "30px",
    fontSize: "30px",
    color: "white",
    fontWeight: "300",
});