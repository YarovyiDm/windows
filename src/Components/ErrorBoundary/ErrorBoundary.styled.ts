import { styled, Box } from "@mui/material";

export const ErrorWrapper = styled(Box)({
    height: "calc(100vh - 400px)",
    width: "calc(100vw - 400px)",
    background: "#0077d6",
    padding: "200px",
    color: "white",
});

export const ErrorContent = styled(Box)({
    marginTop: "30px",
    marginBottom: "30px",
    fontSize: "35px",
    fontWeight: "200",
});

export const ErrorProgress = styled(Box)({
    fontSize: "35px",
    fontWeight: "200",
});

export const ErrorIcon = styled(Box)({
    fontSize: "140px",
});