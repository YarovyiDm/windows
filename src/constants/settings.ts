import { TRANSLATION_KEYS } from "constants/translation";
import BrushIcon from "@mui/icons-material/Brush";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";

export enum SETTINGS_TAB {
    PERSONALIZATION = "personalization",
    SYSTEM = "system",
}

export const SETTINGS_TABS = [
    {
        id: SETTINGS_TAB.PERSONALIZATION,
        label: TRANSLATION_KEYS.SETTINGS_WINDOW.PERSONALIZATION,
        icon: BrushIcon,
    },
    {
        id: SETTINGS_TAB.SYSTEM,
        label: TRANSLATION_KEYS.SETTINGS_WINDOW.SYSTEM,
        icon: TvOutlinedIcon,
    },
] as const;