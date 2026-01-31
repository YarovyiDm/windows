import { styled } from "@mui/material";
import { SystemTrayItemWrapper } from "Containers/TaskBar/Components/SystemTray/SystemTray.styled";
import { isOpenedStylesProps } from "Containers/TaskBar/TaskBar.types";
import Icon from "Components/Icon/Icon";

export const AppsWrapper = styled(SystemTrayItemWrapper, {
    shouldForwardProp: (prop) => prop !== "isOpened",
})<isOpenedStylesProps>(({ isOpened }) => ({
    background: isOpened ? "rgba(255, 255, 255, 0.05)" : "",
    cursor: "pointer",
    "&:hover": {
        background: "rgba(255, 255, 255, 0.05)",
    },
}));

export const AppsIconWrapper = styled(Icon, {
    shouldForwardProp: (prop) => prop !== "isOpened",
})<isOpenedStylesProps>(({ isOpened }) => ({
    transition: "transform 200ms ease-in-out",
    fill: "white",
    transform: isOpened ? "rotate(180deg)" : "none",
}));