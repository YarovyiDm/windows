import Loader from "Components/Loader/Loader";
import useLanguage from "Hooks/useLanguage";
import {
    SystemQuitScreenStatus,
    SystemQuitScreenWrapper,
} from "Containers/Screens/SystemQuitScreen/SystemQuitScreen.styled";
import type { SystemQuitScreenProps } from "./SystemQuitScreen.types";

const SystemQuitScreen = ({ type }: SystemQuitScreenProps) => {
    const { translate } = useLanguage();

    return (
        <SystemQuitScreenWrapper>
            <Loader />
            <SystemQuitScreenStatus>{translate(type)}</SystemQuitScreenStatus>
        </SystemQuitScreenWrapper>
    );
};

export default SystemQuitScreen;
