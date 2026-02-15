import { styled, Box } from "@mui/material";

export const CurrencyWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    gap: 1,
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
});

export const CurrencyTrigger = styled(Box)({
    display: "flex",
    color: 'white',
    alignItems: "center",
    gap: "10px",
    svg: {
        width: "20px",
        height: "20px",
    },
});