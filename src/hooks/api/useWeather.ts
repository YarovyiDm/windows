import { useQuery } from "@tanstack/react-query";
import { API } from "api";
import { QUERY_KEYS } from "utils/query-keys";

export const useCurrentWeather = (city: string) =>
    useQuery({
        queryKey: QUERY_KEYS.WEATHER.CURRENT(city),
        queryFn: () => API.weather.getCurrentByCity(city),
        // staleTime: 5 * 60 * 1000,
        // refetchOnWindowFocus: false,
    });

export const useWeatherForecast = (city: string) =>
    useQuery({
        queryKey: QUERY_KEYS.WEATHER.FORECAST(city),
        queryFn: () => API.weather.getForecastByCity(city, 7),
        // staleTime: 10 * 60 * 1000,
    });