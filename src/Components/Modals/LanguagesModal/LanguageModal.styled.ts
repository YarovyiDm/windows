import { styled, Box } from "@mui/material";
import { ModalWrapper } from "Components/Modals/Modals.styled";

export const LanguageModalWrapper = styled(ModalWrapper)({
    width: "380px",
    height: "270px",
    right: "-30px",
    top: "-290px",
});

export const LanguageModalHeaderWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    height: "15%",
});

export const LanguageModalTitle = styled(Box)({
    color: "#535353",
    fontSize: "14px",
    marginRight: "10px",
    fontWeight: "500",
    paddingLeft: "15px",
});

export const LanguageModalHotKeysWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    color: "#535353",
});

export const LanguageModalHotKeysItem = styled(Box)({
    fontSize: "10px",
    border: "solid 1px #c3c3c3",
    padding: "0 3px",
    borderRadius: "5px",
});