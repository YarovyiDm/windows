import WindowBasic from "Components/Windows/WindowBasic/WindowBasic";
import SystemInformation from "Components/Windows/SettingsWindow/Components/SystemInformation/SystemInformation";
import Display from "Components/Windows/SettingsWindow/Components/Display/Display";
import Desktop from "Components/Windows/SettingsWindow/Components/Desktop/Desktop";
import Wallpapers from "Components/Windows/SettingsWindow/Components/Wallpapers/Wallpapers";
import { v4 as getID } from "uuid";

const SettingsWindow = () => {
    const windowID = getID();

    return (
        <WindowBasic name='Settings' id='sdsdsdss'>
            <Wallpapers />
            <Display />
            <Desktop />
            <SystemInformation />
        </WindowBasic>
    );
};

export default SettingsWindow;
