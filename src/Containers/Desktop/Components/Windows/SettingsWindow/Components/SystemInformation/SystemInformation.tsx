import { Typography } from "@mui/material";
import { BlockBasic } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import useSystem from "Hooks/useSystem";
import { SystemContentWrapper } from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow.styled";
import {
    SystemInformationItemTitle,
    SystemInformationItemWrapper,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/SystemInformation/SystemInformation.styled";

export const SystemInformation = () => {
    const systemInfo = useSystem();

    return (
        <BlockBasic>
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