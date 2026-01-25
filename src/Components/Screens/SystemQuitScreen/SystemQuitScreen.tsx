import React from "react";

import Loader from "Components/Loader/Loader";
import useLanguage from "Hooks/useLanguage";
import { SystemQuitScreenProps } from "./SystemQuitScreen.types";
import {
    SystemQuitScreenStatus,
    SystemQuitScreenWrapper,
} from "Components/Screens/SystemQuitScreen/SystemQuitScreen.styled";

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
