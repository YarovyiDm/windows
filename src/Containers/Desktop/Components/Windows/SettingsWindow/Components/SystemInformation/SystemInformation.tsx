import { Typography } from "@mui/material";
import { useSystem } from "Hooks";
import { BlockBasic } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import { SystemContentWrapper } from "../../SettingsWindow.styled";
import {
    SystemInformationItemTitle,
    SystemInformationItemWrapper,
} from "./SystemInformation.styled";

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