import { openFile } from "domain/desktop/mutations/openFile";
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from "store/index";
import { selectOpenedWindowLength } from "store/selectors/desktop";
import { closeModal } from "store/slices/taskBar";
import { FileStyled } from "Containers/Desktop/Components/File/File.styled";
import { Icon } from "Components/index";
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
