import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import SystemInformation from "Containers/Desktop/Components/Windows/SettingsWindow/Components/SystemInformation/SystemInformation";
import Display from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Display/Display";
import Desktop from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop";
import Wallpapers from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Wallpapers/Wallpapers";
import { useAppSelector } from "Store/index";
import { selectSettingsWindowId } from "Store/selectors/System";

const SettingsWindow = () => {
    const settingsID = useAppSelector(selectSettingsWindowId);

    return (
        <WindowBasic name='Settings' id={settingsID}>
            <Wallpapers />
            <Display />
            <Desktop />
            <SystemInformation />
        </WindowBasic>
    );
};

export default SettingsWindow;
