import { styled } from "@mui/material";
import { SystemTrayItemWrapper } from "Containers/TaskBar/Components/SystemTray/SystemTray.styled";
import { isOpenedStylesProps } from "Containers/TaskBar/TaskBar.types";

export const LanguagesWrapper = styled(SystemTrayItemWrapper, {
    shouldForwardProp: (prop) => prop !== "isOpened",
})<isOpenedStylesProps>(({ isOpened }) => ({
    background: isOpened ? "#f7f5f5" : "",
    "&:hover": {
        background: "#f7f5f5",
    },
}));