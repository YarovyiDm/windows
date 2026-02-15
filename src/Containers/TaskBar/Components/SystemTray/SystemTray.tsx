import { Box } from '@mui/material';
import { useSystemClock } from "hooks/useSystemClock";
import Apps from "./Components/Apps/Apps";
import Languages from "./Components/Languages/Languages";
import { formatDate, formatTime } from "./SystemTray.helpers";
import type { SystemTrayProps } from "./SystemTray.types";

const SystemTray = ({
    systemLanguageIndex,
    refs,
}: SystemTrayProps) => {
    const now = useSystemClock();

    return (
        <Box sx={{ display: "flex", alignItems: "center", height: "40px" }}>
            <Apps refs={refs} />
            <Languages refs={refs} systemLanguageIndex={systemLanguageIndex} />
            <Box
                display='flex'
                flexDirection='column'
                alignItems='flex-end'
                sx={{ color: 'white', padding: '0 10px' }}
            >
                <Box fontSize={12}>{formatTime(now)}</Box>
                <Box fontSize={12}>
                    {formatDate(now)}
                </Box>
            </Box>
        </Box>
    );
};

export default SystemTray;
