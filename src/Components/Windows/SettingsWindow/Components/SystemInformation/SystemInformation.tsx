import { BlockBasic } from "Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import { Typography } from "@mui/material";
import useSystem from "Hooks/useSystem";
import { SystemContentWrapper } from "Components/Windows/SettingsWindow/SettingsWindow.styled";
import {
    SystemInformationItemTitle,
    SystemInformationItemWrapper,
} from "Components/Windows/SettingsWindow/Components/SystemInformation/SystemInformation.styled";

export const SystemInformation = () => {
    const systemInfo = useSystem();
    
    return (
        <BlockBasic title='System information'>
            <SystemContentWrapper>
                <SystemInformationItemWrapper>
                    <SystemInformationItemTitle>Platform:</SystemInformationItemTitle>
                    <Typography>
                        {systemInfo?.platform} {systemInfo?.cpuArchitecture}
                    </Typography>
                </SystemInformationItemWrapper>
                <SystemInformationItemWrapper>
                    <SystemInformationItemTitle>
                        Color depth:
                    </SystemInformationItemTitle>
                    <Typography>
                        {systemInfo?.colorDepth} bit
                    </Typography>
                </SystemInformationItemWrapper>
                <SystemInformationItemWrapper>
                    <SystemInformationItemTitle>
                        Concurrency:
                    </SystemInformationItemTitle>
                    <Typography>
                        {systemInfo?.hardwareConcurrency}
                    </Typography>
                </SystemInformationItemWrapper>
            </SystemContentWrapper>
        </BlockBasic>
    );
};

export default SystemInformation;