import { Box } from '@mui/material';
import Apps from "./Components/Apps/Apps";
import Languages from "./Components/Languages/Languages";
import type { SystemTrayProps } from "./SystemTray.types";

const SystemTray = ({
    systemLanguageIndex,
    refs,
}: SystemTrayProps) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", height: "40px" }}>
            <Apps refs={refs} />
            <Languages refs={refs} systemLanguageIndex={systemLanguageIndex} />
        </Box>
    );
};

export default SystemTray;
