import React, { useState, useEffect } from "react";

import { CROSS } from "Constants/System";
import Icon from "Components/Icon/Icon";
import useLanguage from "Hooks/useLanguage";
import { NotificationProps } from "./Notification.types";
import {
    CloseButtonWrapper,
    NotificationContent,
    NotificationHeader, NotificationTitle,
    NotificationWrapper,
} from "Components/Notification/Notification.styled";

const Notification = ({ delayBeforeShow, duration, text }: NotificationProps) => {
    const [visible, setVisible] = useState(true);
    const { translate } = useLanguage();

    useEffect(() => {
        setTimeout(() => setVisible(true), delayBeforeShow ?? 2000);
        const timer = setTimeout(() => setVisible(false), duration ?? 10000);

        return () => clearTimeout(timer);
    }, [delayBeforeShow, duration]);

    const closeNotification = () => setVisible(false);

    return (
        <NotificationWrapper
            style={{
                transform: visible ? "translateX(0)" : "translateX(100%)",
                opacity: visible ? 1 : 0,
            }}
        >
            <NotificationHeader>
                <NotificationTitle>{translate("notification")}</NotificationTitle>
                <CloseButtonWrapper
                    onClick={() => closeNotification()}
                >
                    <Icon
                        name={CROSS}
                        style={{ width: "20px", height: "20px" }}
                    />
                </CloseButtonWrapper>
            </NotificationHeader>
            <NotificationContent>{text}</NotificationContent>
        </NotificationWrapper>
    );
};

export default Notification;
