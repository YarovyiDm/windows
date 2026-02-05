import BrushIcon from "@mui/icons-material/Brush";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";

export enum SETTINGS_TAB {
    PERSONALIZATION = "personalization",
    SYSTEM = "system",
}

export const SETTINGS_TABS = [
    {
        id: SETTINGS_TAB.PERSONALIZATION,
        label: "Personalization",
        icon: BrushIcon,
    },
    {
        id: SETTINGS_TAB.SYSTEM,
        label: "System",
        icon: TvOutlinedIcon,
    },
] as const;