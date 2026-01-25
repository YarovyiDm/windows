import React from "react";

import Icon from "Components/Icon/Icon";
import { WINDOWS } from "Constants/System";
import Loader from "Components/Loader/Loader";
import { StartScreenWrapper } from "Components/Screens/StartScreen/StartScreen.styled";

const StartScreen = () => {
    return (
        <StartScreenWrapper>
            <Icon name={WINDOWS} />
            <Loader />
        </StartScreenWrapper>
    );
};

export default StartScreen;
