import { styled, Box } from "@mui/material";

export const NotificationWrapper =  styled(Box)({
    position: "fixed",
    bottom: "70px",
    right: "20px",
    width: "300px",
    height: "200px",
    background: "#202020",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.5s ease, opacity 0.5s ease",
    zIndex: "1000",
    borderRadius: "10px",
});

export const NotificationHeader = styled(Box)({
    display: "flex",
    height: "50px",
    alignItems: "center",
    width: "calc(100% - 20px)",
    justifyContent: "space-between",
    padding: "0 10px",
    borderBottom: "solid 1px rgba(255, 255, 255, 0.05)",
    color: "white",
});

export const NotificationContent = styled(Box)({
    padding: "10px",
    width: "calc(100% - 20px)",
    height: "calc(100% - 70px)",
    fontSize: "14px",
    color: "white",
});

export const NotificationTitle = styled(Box)({
    height: "100%",
    lineHeight: "50px",
    fontSize: "14px",
});

export const CloseButtonWrapper = styled(Box)({
    width: "25px",
    height: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "solid 1px #3f3f3f",
    borderRadius: "3px",
    "&:hover": {
        background: "#3f3f3f",
        "svg path": {
            fill: "white",
        },
    },
    "svg path": {
        fill: "#3f3f3f",
    },
});