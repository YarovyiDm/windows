import { styled, Box } from "@mui/material";

export const AppWrapper = styled(Box)({
    width: "40px",
    height: "40px",
    margin: "0 5px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    userSelect: "none",
});

export const AppIconWrapper = styled(Box)({
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    svg: {
        width: "30px",
        height: "30px",
    },
    "&:hover": {
        background: "rgba(255, 255, 255, 0.05)",
    },
});