import { styled, Box } from "@mui/material";

export const BlockWrapper = styled(Box)({
    color: "#636363",
    marginBottom: "20px",
    borderRadius: "8px",

    overflowX: "auto",

    scrollbarWidth: "thin",
    scrollbarColor: "#ffffff rgba(255, 255, 255, 0.05)",

    "&::-webkit-scrollbar": {
        height: "8px",
    },

    "&::-webkit-scrollbar-track": {
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "8px",
    },

    "&::-webkit-scrollbar-thumb": {
        background: "#ffffff",
        borderRadius: "8px",
    },

    "&::-webkit-scrollbar-thumb:hover": {
        background: "rgba(255, 255, 255, 0.85)",
    },
});

export const BlockHeader =  styled(Box)({
    fontSize: "20px",
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