import { styled } from "@mui/material";
import { SystemTrayItemWrapper } from "Containers/TaskBar/Components/SystemTray/SystemTray.styled";
import { isOpenedStylesProps } from "Containers/TaskBar/TaskBar.types";

export const LanguagesWrapper = styled(SystemTrayItemWrapper, {
    shouldForwardProp: (prop) => prop !== "isOpened",
})<isOpenedStylesProps>(({ isOpened }) => ({
    color: "white",
    cursor: "pointer",
    background: isOpened ? "rgba(255, 255, 255, 0.05)" : "",
    "&:hover": {
        background: "rgba(255, 255, 255, 0.05)",
    },
}));