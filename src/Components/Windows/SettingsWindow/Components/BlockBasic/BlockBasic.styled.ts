import { styled, Box } from "@mui/material";

export const BlockWrapper =  styled(Box)({
    color: "#636363",
    background: "white",
    marginBottom: "20px",
    borderRadius: "8px",
});

export const BlockHeader =  styled(Box)({
    fontSize: "20px",
    borderBottom: "solid 1px #b9b9b9",
    padding: "10px",
    fontWeight: "bold",
});

export const BlockChildren =  styled(Box)({
    display: "flex",
    overflowX: "auto",
    height: "fit-content",
    alignItems: "center",
    padding: "10px 12px",
});