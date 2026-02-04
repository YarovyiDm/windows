import { Typography } from '@mui/material';
import { openFile } from "Utils";
import { Icon } from "Components/index";
import { useAppDispatch, useAppSelector } from "Store/index";
import { FileStyled } from "Containers/Desktop/Components/File/File.styled";
import { selectIsWindowOpen, selectOpenedWindowLength } from "Store/selectors/Desktop";
import type { FileProps } from "./FIle.types";

const File = ({ file }: FileProps) => {
    const dispatch = useAppDispatch();
    const isSettingsOpen = useAppSelector(selectIsWindowOpen("Settings"));
    const openedWindowsLength = useAppSelector(selectOpenedWindowLength);

    const onFileModalChange = () => {
        if(!isSettingsOpen) {
            openFile(file, dispatch, openedWindowsLength);
        }
    };

    return (
        <FileStyled onClick={onFileModalChange}>
            <Icon name={file.icon} style={{ width: "50px", height: "50px" }} />
            <Typography sx={{ fontSize: '12px' }}>{file.name}</Typography>
        </FileStyled>
    );
};

export default File;
