import { styled, Box } from "@mui/material";
import Modal from "Components/Modals/Modal/Modal";

export const HiddenAppsModalWrapper = styled(Modal)({
    width: "166px",
    height: "81px",
    top: "-110px",
    padding: "5px",
    background: "#fbfbfb",
    display: "flex",
    flexWrap: "wrap",
    gap: "2px",
});

export const HiddenAppsItem = styled(Box)({
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        background: "#f7f5f5",
    },
});