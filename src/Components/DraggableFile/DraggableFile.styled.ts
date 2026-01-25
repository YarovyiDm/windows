import { styled, Box } from "@mui/material";

export const File = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: "5px",
    position: "relative",
    zIndex: "1",
    "&:hover":  {
        background: "rgba(179, 180, 179, 0.4)",
    },
});

export const TooltipStyled = styled(Box)({
    backgroundColor: "#333333",
    color: "#ffffff",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    zIndex: "1000",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    position: "absolute",
    top: "25px",
    left: "70px",
});

export const FileName = styled(Box)({
    fontSize: "12px",
    color: "white",
    marginTop: "5px",
    textAlign: "center",
    width: "80px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
});