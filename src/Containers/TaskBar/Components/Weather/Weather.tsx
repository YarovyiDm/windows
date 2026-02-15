import { Box, Typography } from '@mui/material';
import { useRef, useState } from "react";
import { useClickOutside } from "hooks";
import { useAppSelector } from "store/index";
import { selectUserLocationCity } from "store/selectors/system";
import { useCurrentWeather } from "hooks/api";
import { WeatherIcon, WeatherTrigger, WeatherWrapper } from "./Weather.styled";
import Widget from "./Components/Widget/Widget";
import { getIconUrl } from "./Weather.helpers";

const Weather = () => {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);
    const weatherRef = useRef<HTMLDivElement>(null);
    const userLocationCity = useAppSelector(selectUserLocationCity);

    const {
        data,
        isLoading,
        isError,
        error,
        isFetching,
    } = useCurrentWeather(userLocationCity);

    useClickOutside(weatherRef, () => {
        setIsWidgetOpen(false);
    });

    if (isLoading || isFetching) return <div>Loading weather…</div>;
    if (isError) return <div>Failed to load weather: {String(error)}</div>;
    if (!data) return <div>No weather data</div>;

    const iconUrl = getIconUrl(data.current.condition.icon);

    return (
        <WeatherWrapper ref={weatherRef}>
            <WeatherTrigger onClick={() => setIsWidgetOpen(prev => !prev)}>
                <WeatherIcon sx={{ backgroundImage: `url(${iconUrl})` }}/>
                <Box>
                    <Typography sx={{ fontSize: "12px", color: '#fff' }}>{data.current.temp_c.toFixed()}°C</Typography>
                    <Typography sx={{ fontSize: "12px", color: '#fff' }}>{data.current.condition.text}</Typography>
                </Box>
            </WeatherTrigger>
            <Widget isOpen={isWidgetOpen} />
        </WeatherWrapper>
    );
};

export default Weather;