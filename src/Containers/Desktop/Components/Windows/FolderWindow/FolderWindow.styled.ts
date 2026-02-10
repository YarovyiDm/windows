import { styled, Box } from "@mui/material";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

export const FolderWindowWrapper = styled(Box)({
    height: "calc(100% - 60px)",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "20px",
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

export const BreadcrumbWrapper = styled(Box)({
    width: "100%",
    background: "white",
    padding: "5px",
    borderRadius: "5px",
});

export const PathWrapper = styled("span")({
    cursor: 'pointer',
    "&:hover": { textDecoration: "underline" },
});