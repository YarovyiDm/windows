import { styled, Box, Typography, Accordion } from "@mui/material";

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
    color: "white",
});

export const SettingsWrapper = styled(Box)({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    gap: "10px",
});

export const SidebarWrapper = styled(Box)({
    width: "200px",
    display: "flex",
    flexDirection: "column",
});

export const TabsContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    gap: "5px",
});

export const TabButton = styled(Box, {
    shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean; }>(({ active }) => ({
    background: active ? "rgba(255, 255, 255, 0.05)" : "transparent",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    textAlign: "left",
    padding: "12px 16px",
    fontSize: "14px",
    cursor: "pointer",
    width: "auto",
    transition: "background 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    "&:hover": {
        background: "rgba(255, 255, 255, 0.05)",
    },
    "&:focus": {
        outline: "none",
    },
}));

export const ContentWrapper = styled(Box)({
    flex: 1,
    padding: "16px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
});

export const AnimatedContent = styled(ContentWrapper)({
    position: "relative",
    flex: 1,
});

export const ContentInner = styled(Box)({
    willChange: "transform, opacity",
    height: "100%",
    animation: "fadeSlide 0.2s ease",

    "@keyframes fadeSlide": {
        from: {
            opacity: 0,
            transform: "translateX(10px)",
        },
        to: {
            opacity: 1,
            transform: "translateX(0)",
        },
    },
});

export const AccordionStyled = styled(Accordion)({
    color: "#fff",
    background: "rgba(255, 255, 255, 0.05)",
    maxWidth: "900px",
    "& .MuiAccordionSummary-expandIconWrapper": {
        color: "#fff",
    },
});