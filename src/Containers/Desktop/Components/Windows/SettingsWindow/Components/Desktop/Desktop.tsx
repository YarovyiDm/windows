import { BlockBasic } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import SelectionArea from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Components/SelectionArea/SelectionArea";
import File from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Components/File/File";
import { SystemContentWrapper } from "../../SettingsWindow.styled";

export const Desktop = () => {
    return (
        <BlockBasic>
            <SystemContentWrapper>
                <SelectionArea />
                <File />
            </SystemContentWrapper>
        </BlockBasic>
    );
};

export default Desktop;