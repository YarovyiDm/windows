import { BlockBasic } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import { SystemContentWrapper } from "../../SettingsWindow.styled";
import SelectionArea from "./Components/SelectionArea/SelectionArea";
import File from "./Components/File/File";

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