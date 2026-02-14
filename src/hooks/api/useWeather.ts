import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "utils/query-keys";
import { API } from "api";

export const useCurrentWeather = (city: string) =>
    useQuery({
        queryKey: QUERY_KEYS.WEATHER.CURRENT(city),
        queryFn: () => API.weather.currentByCity(city),
        // staleTime: 5 * 60 * 1000,
        // refetchOnWindowFocus: false,
    });

export const useWeatherForecast = (city: string) =>
    useQuery({
        queryKey: QUERY_KEYS.WEATHER.FORECAST(city),
        queryFn: () => API.weather.forecastByCity(city, 7),
        // staleTime: 10 * 60 * 1000,
    });