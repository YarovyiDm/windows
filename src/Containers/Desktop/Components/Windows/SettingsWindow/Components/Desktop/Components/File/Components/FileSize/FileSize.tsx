import { Typography, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectFileSelectionColor, selectFileSize } from "Store/selectors/System";
import { SystemItemContentWrapper } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import Icon from "Components/Icon/Icon";
import { TEXT_FILE } from "Constants/System";
import { changeDesktopFileSize } from "Store/slices/System";
import {
    FILE_SIZE,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Components/File/Components/FileSize/FileSize.constants";
import {
    FileItem,
    FileSizeItem,
    FileSizeTitle,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Components/File/Components/FileSize/FileSize.styled";

const FileSize = () => {
    const dispatch = useAppDispatch();
    const selectedSize = useAppSelector(selectFileSize);

    const fileSelectionColor = useAppSelector(selectFileSelectionColor);

    return (
        <SystemItemContentWrapper>
            <Box>
                <Typography mb={1}>Size</Typography>
                <Box display='flex' gap={1}>
                    {FILE_SIZE.map(file => {
                        return (
                            <FileSizeItem
                                key={file.title}
                                onClick={() =>
                                    dispatch(
                                        changeDesktopFileSize({
                                            width: file.size.width,
                                            height: file.size.height,
                                        }),
                                    )
                                }
                            >
                                <FileItem
                                    isSelected={selectedSize.height === file.size.height}
                                    sx={{
                                        background: fileSelectionColor,
                                    }}
                                >
                                    <Icon
                                        name={TEXT_FILE}
                                        style={{
                                            height: file.iconSize.height,
                                            width: file.iconSize.width,
                                        }}
                                    />
                                </FileItem>
                                <FileSizeTitle>{file.title}</FileSizeTitle>
                            </FileSizeItem>
                        );
                    })}
                </Box>
            </Box>
        </SystemItemContentWrapper>
    );
};

export default FileSize;