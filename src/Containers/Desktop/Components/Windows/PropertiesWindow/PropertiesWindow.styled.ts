import { styled, Box } from "@mui/material";

export const PropertiesFileWrapper = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    gap: "20px",
    "svg": {
        width: "70px",
        height: "70px",
    },
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    padding: "30px 0",
});

export const PropertiesInfoWrapper = styled(Box)({
    width: "calc(100% - 60px)",
    padding: "30px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
});