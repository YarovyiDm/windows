import { Box, styled } from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

export const BreadcrumbWrapper = styled(Box)({
    width: "100%",
    color: "white",
    padding: "0 5px",
    borderRadius: "5px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    height: "28px",
    display: "flex",
    alignItems: "center",
    gap: '5px',
});

export const PathWrapper = styled("span")({
    cursor: 'pointer',
    height: '100%',
    display: "flex",
    alignItems: "center",
    "&:hover": {
        background: 'rgba(255, 255, 255, 0.05)',
    },
    fontSize: "12px",
    padding: "0 5px",
});

export const IconWrapper = styled(KeyboardBackspaceOutlinedIcon, {
    shouldForwardProp: (prop) => prop !== "isDisabled",
})<{ isDisabled: boolean; }>(({ isDisabled }) => ({
    padding: '3px',
    cursor: 'pointer',
    borderRadius: '5px',
    width: 25,
    height: 25,
    pointerEvents: isDisabled ? 'none' : 'auto',
    path: {
        fill: isDisabled ? "rgba(255, 255, 255, 0.05)" : "white",
    },
    "&:last-of-type": {
        transform: "rotate(-180deg)",
    },
    "&:hover": {
        background: isDisabled ? " none" : 'rgba(255, 255, 255, 0.05)',
    },
    "&:active": {
        background: 'unset',
    },
}));