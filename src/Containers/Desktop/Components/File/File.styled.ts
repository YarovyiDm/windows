import { styled, Box } from "@mui/material";

export const FileStyled = styled(Box)({
    width: "100px",
    height: "100px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white",
    cursor: "pointer",
    "&:hover": {
        background: "rgba(255, 255, 255, 0.05)",
    },
    "svg": {
        width: "50px",
        height: "50px",
    },
});