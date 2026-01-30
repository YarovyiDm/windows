import { Box, Typography } from '@mui/material';
import { useMemo, useRef, useState } from "react";
import { useCurrentWeather } from "Hooks/Api/useWeather";
import { WeatherIcon, WeatherTrigger, WeatherWrapper } from "Containers/TaskBar/Components/Weather/Weather.styled";
import Widget from "Containers/TaskBar/Components/Weather/Components/Widget/Widget";
import { useClickOutside } from "Hooks/useClickOutside";
import { getIconUrl } from "Containers/TaskBar/Components/Weather/Weather.helpers";

const Weather = () => {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);
    const widgetRef = useRef<HTMLDivElement>(null);
    const city = useMemo(() => "Kyiv", []);
    const {
        data,
        isLoading,
        isError,
        error,
        isFetching,
    } = useCurrentWeather(city);

    useClickOutside(widgetRef, () => {
        setIsWidgetOpen(false);
    });

    if (isLoading || isFetching) return <div>Loading weather…</div>;
    if (isError) return <div>Failed to load weather: {String(error)}</div>;
    if (!data) return <div>No weather data</div>;

    const iconUrl = getIconUrl(data.current.condition.icon);

    return (
        <WeatherWrapper ref={widgetRef}>
            <WeatherTrigger className='weather-trigger' onClick={() => setIsWidgetOpen(prev => !prev)}>
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