import { styled, Box, Typography } from "@mui/material";

export const SystemContentWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    paddingLeft: "20px",
});

export const SystemItemWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
});

export const SystemItemContentWrapper = styled(Box)({
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
});

export const SystemItemSubTitleStyle = styled(Typography)({
    fontWeight: "bold",
    marginBottom: "20px",
});