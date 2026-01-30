import { Box } from "@mui/material";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { TodayIconWrapper } from "Containers/TaskBar/Components/Weather/Components/Widget/Components/Today/Today.styled";
import { getIconUrl } from "Containers/TaskBar/Components/Weather/Weather.helpers";
import { TodayProps } from "./Today.types";

const Today = ({ weather }: TodayProps) => {
    const iconUrl = getIconUrl(weather.current.condition.icon);

    return (
        <Box sx={{ color: '#fff' }} display='flex' alignItems='flex-start' justifyContent='space-between'>
            <Box display='flex' alignItems='flex-start' gap={2}>
                <TodayIconWrapper sx={{ backgroundImage: `url(${iconUrl})` }} />
                <Box>
                    <Box sx={{ fontSize: '20px' }}>{weather.location.name}, {weather.location.country}</Box>
                    <Box display='flex' alignItems='flex-start'>
                        <Box sx={{ fontSize: '50px' }}>{weather.current.temp_c.toFixed()}</Box>
                        <Box pt={1}>°C</Box>
                    </Box>
                </Box>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='flex-end' gap={1}>
                <Box display='flex' alignItems='center' justifyContent='center'>
                    <WaterDropIcon />
                    <Box>{weather.current.humidity}%</Box>
                </Box>
                <Box display='flex'>
                    <Box sx={{ fontSize: '20px' }}>Feels like {weather.current.feelslike_c.toFixed()}°</Box>
                </Box>
                <Box sx={{ fontSize: '20px' }}>{weather.current.condition.text}</Box>
            </Box>
        </Box>
    );
};

export default Today;