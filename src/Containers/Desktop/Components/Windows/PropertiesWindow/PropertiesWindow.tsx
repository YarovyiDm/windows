import { Typography } from '@mui/material';
import { WINDOW_KIND } from "Types/Desktop";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { PropertiesProps } from "Containers/Desktop/Components/Windows/PropertiesWindow/PropertiesWindow.types";
import { dateToLocaleString } from "Utils/dateToLocaleString";
import { Icon } from "Components/index";
import {
    PropertiesFileWrapper,
    PropertiesInfoWrapper,
} from "Containers/Desktop/Components/Windows/PropertiesWindow/PropertiesWindow.styled";
import { getPayloadSize } from "Utils/getPayloadSize";
import { TRANSLATION_KEYS } from "Constants/Translation";
import { useLanguage } from "Hooks/useLanguage";

const PropertiesWindow = ({ desktopWindow }: PropertiesProps) => {
    const name = 'fileName' in desktopWindow.payload ? desktopWindow.payload.fileName : "";
    const updated_at = 'updated_at' in desktopWindow.payload ? desktopWindow.payload.updated_at : "";
    const created_at = 'created_at' in desktopWindow.payload ? desktopWindow.payload.created_at : "";
    const icon = "icon" in desktopWindow.payload && desktopWindow.payload.icon;
    const type = "fileType" in desktopWindow.payload && desktopWindow.payload.fileType;
    const { translate } = useLanguage();
    const size = getPayloadSize(desktopWindow.payload);

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
        >
            <PropertiesFileWrapper>
                {icon && <Icon name={icon} />}
                <div>{name}</div>
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