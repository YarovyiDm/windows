import { styled, Box } from "@mui/material";

export const FileStyled = styled(Box)({
    width: "90px",
    height: "90px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        background: "white",
    },
    "svg": {
        width: "50px",
        height: "50px",
    },
});