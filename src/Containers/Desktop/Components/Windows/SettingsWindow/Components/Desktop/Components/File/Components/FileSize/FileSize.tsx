import { Typography, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectFileSelectionColor, selectFileSize } from "Store/selectors/System";
import { SystemItemContentWrapper } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import Icon from "Components/Icon/Icon";
import { changeDesktopFileSize } from "Store/slices/System";
import { ICONS } from "Constants/Icons";
import { useLanguage } from "Hooks/useLanguage";
import { TRANSLATION_KEYS } from "Constants/Translation";
import {
    FILE_SIZE,
} from "./FileSize.constants";
import {
    FileItem,
    FileSizeItem,
    FileSizeTitle,
} from "./FileSize.styled";

const FileSize = () => {
    const dispatch = useAppDispatch();
    const selectedSize = useAppSelector(selectFileSize);
    const { translate } = useLanguage();

    const fileSelectionColor = useAppSelector(selectFileSelectionColor);

    return (
        <SystemItemContentWrapper>
            <Box>
                <Typography mb={1} sx={{ color: "#fff" }}>{translate(TRANSLATION_KEYS.SETTINGS_WINDOW.FILE_SIZE)}</Typography>
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
                                    sx={{ background: fileSelectionColor }}
                                >
                                    <Icon
                                        name={ICONS.TEXT_FILE}
                                        style={{ height: file.iconSize.height, width: file.iconSize.width }}
                                    />
                                </FileItem>
                                <FileSizeTitle>{translate(file.title)}</FileSizeTitle>
                            </FileSizeItem>
                        );
                    })}
                </Box>
            </Box>
        </SystemItemContentWrapper>
    );
};

export default FileSize;