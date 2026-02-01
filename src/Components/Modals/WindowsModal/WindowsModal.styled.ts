import { styled, Box } from "@mui/material";
import { ModalWrapper } from "Components/Modals/Modals.styled";

export const WindowsModalWrapper = styled(ModalWrapper)({
    display: "flex",
    flexDirection: "column",
    width: "700px",
    height: "700px",
    top: "-720px",
    left: "-10px",
    background: "#202020",
    border: "solid 1px rgba(255, 255, 255, 0.05)",
});

export const WindowsModalFooter = styled(Box)({
    height: "8%",
    width: "calc(100% - 140px)",
    background: "rgba(255, 255, 255, 0.05)",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 70px",
});

export const WindowsModalContentWrapper = styled(Box)({
    height: "calc(92% - 100px)",
    width: "calc(100% - 140px)",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    padding: "50px 70px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
});

export const WindowsModalContentHeader = styled(Box)({
    height: "20%",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    fontWeight: "600",
    color: "white",
});

export const WindowsModalFooterUserWrapper = styled(Box)({
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
    borderRadius: "5px",
    "&:hover": {
        background: "#f7f5f5",
    },
});

export const WindowsModalFooterUserIconWrapper = styled(Box)({
    width: "30px",
    height: "30px",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#d3d3d3",
    "svg": {
        height: "18px",
        width: "18px",

        "path": {
            fill: "#535353",
        },
    },
});

export const WindowsModalFooterPowerIconWrapper = styled(Box)({
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "&:hover": {
        background: "#f7f5f5",
    },
    "svg": {
        width: "20px",
        height: "20px",
        "path": {
            fill: "#535353",
        },
    },
});