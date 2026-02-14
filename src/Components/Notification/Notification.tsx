import { ICONS } from "constants/icons";
import { TRANSLATION_KEYS } from "constants/translation";
import { DEFAULT_NOTIFICATION_DELAY, DEFAULT_NOTIFICATION_DURATION } from "constants/system";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "hooks";
import Icon from "Components/Icon/Icon";
import {
    CloseButtonWrapper,
    NotificationContent,
    NotificationHeader,
    NotificationTitle,
    NotificationWrapper,
} from "./Notification.styled";
import type { NotificationProps } from "./Notification.types";

const Notification = ({
    delayBeforeShow = DEFAULT_NOTIFICATION_DELAY,
    duration = DEFAULT_NOTIFICATION_DURATION,
    text,
}: NotificationProps) => {
    const { translate } = useLanguage();

    const [visible, setVisible] = useState(false);

    const wasClosedRef = useRef(false);
    const showTimerRef = useRef<number | null>(null);
    const hideTimerRef = useRef<number | null>(null);

    useEffect(() => {
        if (wasClosedRef.current) return;

        showTimerRef.current = window.setTimeout(() => {
            if (!wasClosedRef.current) {
                setVisible(true);
            }
        }, delayBeforeShow);

        hideTimerRef.current = window.setTimeout(() => {
            if (!wasClosedRef.current) {
                setVisible(false);
            }
        }, delayBeforeShow + duration);

        return () => {
            if (showTimerRef.current) clearTimeout(showTimerRef.current);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        };
    }, [delayBeforeShow, duration]);

    const closeNotification = () => {
        wasClosedRef.current = true;
        setVisible(false);

        if (showTimerRef.current) clearTimeout(showTimerRef.current);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };

    return (
        <NotificationWrapper
            sx={{
                transform: visible ? "translateX(0)" : "translateX(100%)",
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? "auto" : "none",
            }}
        >
            <NotificationHeader>
                <NotificationTitle>
                    {translate(TRANSLATION_KEYS.NOTIFICATION)}
                </NotificationTitle>

                <CloseButtonWrapper onClick={closeNotification}>
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
