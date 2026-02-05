import { Typography } from '@mui/material';
import { openFile } from "Utils";
import { Icon } from "Components/index";
import { useAppDispatch, useAppSelector } from "Store/index";
import { FileStyled } from "Containers/Desktop/Components/File/File.styled";
import { selectOpenedWindowLength } from "Store/selectors/Desktop";
import { closeModal } from "Store/slices/TaskBar";
import type { FileProps } from "./FIle.types";

const File = ({ file }: FileProps) => {
    const dispatch = useAppDispatch();
    const openedWindowsLength = useAppSelector(selectOpenedWindowLength);

    const onFileClick = () => {
        openFile(file, dispatch, openedWindowsLength);
        dispatch(closeModal());
    };

    return (
        <FileStyled onClick={onFileClick}>
            <Icon name={file.icon} style={{ width: "50px", height: "50px" }} />
            <Typography sx={{ fontSize: '12px' }}>{file.name}</Typography>
        </FileStyled>
    );
};

export default File;
