import { forwardRef } from "react";
import { useAppSelector } from "store/index";
import { selectUserLocationCity } from "store/selectors/system";
import Today from "Containers/TaskBar/Components/Weather/Components/Widget/Components/Today/Today";
import { useWeatherForecast } from "hooks/api";
import Forecast from "Containers/TaskBar/Components/Weather/Components/Widget/Components/Forecast/Forecast";
import { WidgetWrapper } from "./Widget.styled";

type Props = {
    isOpen: boolean;
};

const Widget = forwardRef<HTMLDivElement, Props>(
    ({ isOpen }, ref) => {
        const userLocationCity = useAppSelector(selectUserLocationCity);
        const {
            data,
            isLoading,
            isError,
            error,
            isFetching,
        } = useWeatherForecast(userLocationCity);

        if (isLoading || isFetching) return <div>Loading weather…</div>;
        if (isError) return <div>Failed to load weather: {String(error)}</div>;
        if (!data) return <div>No weather data</div>;

        return (
            <WidgetWrapper ref={ref} isOpened={isOpen}>
                <Today weather={data}/>
                <Forecast forecastWeather={data}/>
            </WidgetWrapper>
        );
    },
);

export default Widget;
