import { getPayloadBytes } from "domain/desktop/queries/getPayloadBytes";
import { TRANSLATION_KEYS } from "constants/translation";
import { Typography } from '@mui/material';
import { Box } from "@mui/material";
import { dateToLocaleString } from "utils/dateToLocaleString";
import { formatBytes } from "utils/formatBytes";
import { WINDOW_KIND } from "types/desktop";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { Icon } from "Components/index";
import {
    PropertiesFileWrapper,
    PropertiesInfoWrapper,
} from "Containers/Desktop/Components/Windows/PropertiesWindow/PropertiesWindow.styled";
import { useLanguage } from "hooks/useLanguage";
import type { PropertiesProps } from "./PropertiesWindow.types";

const PropertiesWindow = ({ desktopWindow }: PropertiesProps) => {
    const name = 'fileName' in desktopWindow.payload ? desktopWindow.payload.fileName : "";
    const updated_at = 'updated_at' in desktopWindow.payload ? desktopWindow.payload.updated_at : "";
    const created_at = 'created_at' in desktopWindow.payload ? desktopWindow.payload.created_at : "";
    const icon = "icon" in desktopWindow.payload && desktopWindow.payload.icon;
    const type = "fileType" in desktopWindow.payload && desktopWindow.payload.fileType;
    const { translate } = useLanguage();

    const sizeBytes = getPayloadBytes("content" in desktopWindow.payload
        ? desktopWindow.payload.content
        : undefined);
    const size = formatBytes(sizeBytes);

    return (
        <WindowBasic
            resizable={false}
            defaultSize={{
                width: 400,
                height: 600,
            }}
            title={translate(TRANSLATION_KEYS.PROPERTIES)}
            id={desktopWindow.id}
            kind={WINDOW_KIND.TEXT}
            zIndex={desktopWindow.zIndex}
            disableFullscreenOnDoubleClick
        >
            <PropertiesFileWrapper>
                {icon && <Icon name={icon} />}
                <Box>{name}</Box>
            </PropertiesFileWrapper>
            <PropertiesInfoWrapper>
                <Typography sx={{ fontSize: "14px" }}>{translate(TRANSLATION_KEYS.PROPERTIES_WINDOW.TYPE)}: {type}</Typography>
                <Typography sx={{ fontSize: "14px" }}>{translate(TRANSLATION_KEYS.PROPERTIES_WINDOW.UPDATED_AT)}: {dateToLocaleString(updated_at)}</Typography>
                <Typography sx={{ fontSize: "14px" }}>{translate(TRANSLATION_KEYS.PROPERTIES_WINDOW.CREATED_AT)}: {dateToLocaleString(created_at)}</Typography>
                <Typography sx={{ fontSize: "14px" }}>{translate(TRANSLATION_KEYS.PROPERTIES_WINDOW.SIZE)}: {size}</Typography>
            </PropertiesInfoWrapper>

        </WindowBasic>
    );
};

export default PropertiesWindow;