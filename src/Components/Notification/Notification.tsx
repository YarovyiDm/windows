import { useState, useEffect } from "react";
import { useLanguage } from "Hooks";
import Icon from "Components/Icon/Icon";
import { ICONS } from "Constants/Icons";
import {
    CloseButtonWrapper,
    NotificationContent,
    NotificationHeader, NotificationTitle,
    NotificationWrapper,
} from "./Notification.styled";
import type { NotificationProps } from "./Notification.types";

const Notification = ({ delayBeforeShow, duration, text }: NotificationProps) => {
    const [visible, setVisible] = useState(true);
    const { translate } = useLanguage();

    useEffect(() => {
        const showTimer = setTimeout(() => setVisible(true), delayBeforeShow ?? 2000);
        const hideTimer = setTimeout(() => setVisible(false), (delayBeforeShow ?? 2000) + (duration ?? 1000));

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, [delayBeforeShow, duration]);

    const closeNotification = () => setVisible(false);

    return (
        <NotificationWrapper
            sx={{
                transform: visible ? "translateX(0)" : "translateX(100%)",
                opacity: visible ? 1 : 0,
            }}
        >
            <NotificationHeader>
                <NotificationTitle>{translate("notification")}</NotificationTitle>
                <CloseButtonWrapper
                    onClick={closeNotification}
                >
                    <Icon
                        name={ICONS.CROSS}
                        style={{ width: "20px", height: "20px" }}
                    />
                </CloseButtonWrapper>
            </NotificationHeader>
            <NotificationContent>{text}</NotificationContent>
        </NotificationWrapper>
    );
};

export default Notification;
