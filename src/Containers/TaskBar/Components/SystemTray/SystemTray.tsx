import { Box } from '@mui/material';
import type { IProps } from "Containers/TaskBar/Components/SystemTray/SystemTray.types";
import Apps from "Containers/TaskBar/Components/SystemTray/Components/Apps/Apps";
import Languages from "Containers/TaskBar/Components/SystemTray/Components/Languages/Languages";

const SystemTray = ({
    hiddenAppsModalOpen,
    isLanguagesModalOpen,
    systemLanguageIndex,
    refs,
    handleModalChange,
}: IProps) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", height: "40px" }}>
            <Apps
                refs={refs}
                hiddenAppsModalOpen={hiddenAppsModalOpen}
                handleModalChange={handleModalChange}
            />
            <Languages
                refs={refs}
                handleModalChange={handleModalChange}
                isLanguagesModalOpen={isLanguagesModalOpen}
                systemLanguageIndex={systemLanguageIndex}
            />
        </Box>
    );
};

export default SystemTray;
