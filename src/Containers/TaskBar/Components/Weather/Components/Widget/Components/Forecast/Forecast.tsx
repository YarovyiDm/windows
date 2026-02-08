import { Box } from '@mui/material';
import { formatDateShort } from "Utils";
import {
    ForecastProps,
} from "Containers/TaskBar/Components/Weather/Components/Widget/Components/Forecast/Forecast.types";
import { WeatherIcon } from "Containers/TaskBar/Components/Weather/Weather.styled";

const Forecast = ({ forecastWeather }: ForecastProps) => {
    return (
        <Box display='flex' alignItems='center' justifyContent='space-between' color='#fff'>
            {forecastWeather.forecast.forecastday.slice(1).map((forecast) => {
                const iconUrl = forecast.day.condition.icon.startsWith("//") ? `https:${forecast.day.condition.icon}` : forecast.day.condition.icon;

                return <Box display='flex' key={forecast.date} flexDirection='column' alignItems='center' gap={1}>
                    <Box color='#aeaeae'>{formatDateShort(forecast.date)}</Box>
                    <WeatherIcon sx={{ width: '40px', height: '40px',  backgroundImage: `url(${iconUrl})` }} />
                    <Box>{forecast.day.avgtemp_c.toFixed()}°</Box>
                </Box>;
            })}
        </Box>
    );
};

export default Forecast;