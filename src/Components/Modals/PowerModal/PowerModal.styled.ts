import { styled, Box } from "@mui/material";
import Modal from "Components/Modals/Modal/Modal";
import { Icon } from "Components";

export const PowerModalWrapper = styled(Modal)({
    position: "absolute",
    top: "-107px",
    width: "180px",
    height: "100px",
    background: "green",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
});

export const PowerModalItem = styled(Box)({
    height: "calc(33% - 2px)",
    padding: "0 10px",
    width: "calc(100% - 20px)",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
        background: "#d3d3d3",
    },
    "svg": {
        fill: "#2b2b2b",
    },
    "svg > path": {
        stroke: "#2b2b2b",
    },
});

export const PowerModalItemIcon = styled(Icon)({
    width: "15px",
    height: "15px",
    marginRight: "10px",
});

export const PowerModalItemContent = styled(Box)({
    color: "#535353",
    fontSize: "15px",
});