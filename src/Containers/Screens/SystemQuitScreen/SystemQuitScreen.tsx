import { useLanguage } from "Hooks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "Components/Loader/Loader";
import {
    SystemQuitScreenStatus,
    SystemQuitScreenWrapper,
} from "Containers/Screens/SystemQuitScreen/SystemQuitScreen.styled";
import { closeAllModals } from "Store/slices/TaskBar";
import { closeAllWindows } from "Store/slices/Desktop";
import type { SystemQuitScreenProps } from "./SystemQuitScreen.types";

const SystemQuitScreen = ({ type }: SystemQuitScreenProps) => {
    const dispatch = useDispatch();
    const { translate } = useLanguage();

    useEffect(() => {
        dispatch(closeAllModals());
        dispatch(closeAllWindows());
    }, [dispatch]);

    return (
        <SystemQuitScreenWrapper>
            <Loader />
            <SystemQuitScreenStatus>{translate(type)}</SystemQuitScreenStatus>
        </SystemQuitScreenWrapper>
    );
};

export default SystemQuitScreen;
