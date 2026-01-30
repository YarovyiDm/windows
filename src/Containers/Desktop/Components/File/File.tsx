import { Typography } from '@mui/material';
import { Icon } from "Components/index";
import { useAppDispatch, useAppSelector } from "Store/index";
import { handleCloseAllModals } from "Store/slices/TaskPanelSlice";
import { openWindow } from "Store/slices/Desktop";
import { selectIsWindowOpen } from "Store/selectors/Desktop";
import { FileStyled } from "Containers/Desktop/Components/File/File.styled";
import { selectSettingsWindowId } from "Store/selectors/System";
import type { FileProps } from "./FIle.types";

const File = ({ name, text }: FileProps) => {
    const dispatch = useAppDispatch();
    const isSettingsWindowOpen = useAppSelector(selectIsWindowOpen("Settings"));
    const settingsID = useAppSelector(selectSettingsWindowId);

    const onFileModalChange = () => {
        dispatch(handleCloseAllModals());
        if (!isSettingsWindowOpen) {
            dispatch(
                openWindow({
                    zIndex: 999,
                    content: [],
                    fileName: name,
                    id: settingsID,
                    type: "Settings",
                    isSystem: true,
                }),
            );
        }
    };

    return (
        <FileStyled onClick={onFileModalChange}>
            <Icon name={name} />
            <Typography sx={{ fontSize: '12px' }}>{text}</Typography>
        </FileStyled>
    );
};

export default File;
