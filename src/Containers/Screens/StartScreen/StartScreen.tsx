import Icon from "Components/Icon/Icon";
import Loader from "Components/Loader/Loader";
import { StartScreenWrapper } from "Containers/Screens/StartScreen/StartScreen.styled";
import { ICONS } from "Constants/System";

const StartScreen = () => {
    return (
        <StartScreenWrapper>
            <Icon name={ICONS.WINDOWS} />
            <Loader />
        </StartScreenWrapper>
    );
};

export default StartScreen;
