import { styled, Box } from "@mui/material";
import { ModalWrapper } from "Components/Modals/Modals.styled";

export const PowerModalWrapper = styled(ModalWrapper)({
    position: "absolute",
    top: "-107px",
    width: "180px",
    height: "100px",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#3d3d3d",
});

export const PowerModalItem = styled(Box)({
    height: "calc(33% - 2px)",
    padding: "0 10px",
    width: "calc(100% - 20px)",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
    "&:hover": {
        background: "rgba(255, 255, 255, 0.05)",
    },
    "svg": {
        width: 20,
        height: 20,
        fill: "#2b2b2b",
        flexShrink: 0,
    },
    "svg path": {
        strokeWidth: 1,
        vectorEffect: "non-scaling-stroke",
    },
});

export const PowerModalItemContent = styled(Box)({
    color: "#fff",
    fontSize: "15px",
});