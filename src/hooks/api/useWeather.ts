import { useQuery } from "@tanstack/react-query";
import { API } from "api";
import { QUERY_KEYS } from "utils/query-keys";

export const useCurrentWeather = (city: string) =>
    useQuery({
        queryKey: QUERY_KEYS.WEATHER.CURRENT(city),
        queryFn: () => API.weather.getCurrentByCity(city),
    });

export const useWeatherForecast = (city: string) =>
    useQuery({
        queryKey: QUERY_KEYS.WEATHER.FORECAST(city),
        queryFn: () => API.weather.getForecastByCity(city, 7),
    });