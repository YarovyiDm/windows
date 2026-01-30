import { styled, Box } from "@mui/material";

export const OffScreenWrapper = styled(Box)({
    height: "100vh",
    width: "100vw",
    background: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
});

export const NoSignal = styled(Box)({
    width: "200px",
    height: "120px",
    background: "#2b2b2b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
});

export const PowerButtonWrapper = styled(Box)({
    position: "absolute",
    bottom: "80px",
    right: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #a5a5a5",
    borderRadius: "5px",
    cursor: "pointer",
    width: "50px",
    height: "50px",

    "& svg": {
        width: "25px",
        height: "25px",

        "& rect, & path": {
            fill: "#a5a5a5",
        },
    },

    "&:hover": {
        background: "#a5a5a5",

        "& svg rect, & svg path": {
            fill: "white",
        },
    },
});
