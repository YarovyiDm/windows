import { styled, Box } from "@mui/material";

export const DesktopWrapper = styled(Box)({
    height: "calc(100vh - 106px)",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    padding: "30px",
    flexDirection: "column",
});