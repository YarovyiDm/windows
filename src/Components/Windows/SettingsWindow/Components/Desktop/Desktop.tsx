import { BlockBasic } from "Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import { SystemContentWrapper } from "../../SettingsWindow.styled";
import SelectionArea from "Components/Windows/SettingsWindow/Components/Desktop/Components/SelectionArea/SelectionArea";
import File from "Components/Windows/SettingsWindow/Components/Desktop/Components/File/File";

export const Desktop = () => {
    return (
        <BlockBasic title='Desktop'>
            <SystemContentWrapper>
                <SelectionArea />
                <File />
            </SystemContentWrapper>
        </BlockBasic>
    );
};

export default Desktop;