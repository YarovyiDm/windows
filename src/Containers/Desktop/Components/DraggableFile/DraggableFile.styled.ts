import { styled, Box } from "@mui/material";

export const File = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    margin: "5px",
    "&:hover": {
        background: "rgba(179, 180, 179, 0.4)",
    },
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