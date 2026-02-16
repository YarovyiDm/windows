import { useEffect, useState } from "react";

export const useSystemClock = () => {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const delay = 60000 - (Date.now() % 60000);

        let interval: NodeJS.Timeout;

        const timeout = setTimeout(() => {
            setNow(new Date());

            interval = setInterval(() => {
                setNow(new Date());
            }, 60000);
        }, delay);

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, []);

    return now;
};
