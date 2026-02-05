import { Box } from '@mui/material';
import { SystemTrayProps } from "Containers/TaskBar/Components/SystemTray/SystemTray.types";
import Apps from "Containers/TaskBar/Components/SystemTray/Components/Apps/Apps";
import Languages from "Containers/TaskBar/Components/SystemTray/Components/Languages/Languages";

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
