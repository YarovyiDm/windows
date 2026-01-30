import { AxiosInstance } from "axios";
import { WeatherCurrentSchema, WeatherForecastSchema } from "./Weather.schemas";

export const initApi = (client: AxiosInstance) => ({
    currentByCity: async (city: string) => {
        const res = await client.get("/current.json", {
            params: { q: city },
        });

        return WeatherCurrentSchema.parse(res.data);
    },

    forecastByCity: async (city: string, days = 3) => {
        const res = await client.get("/forecast.json", {
            params: { q: city, days },
        });

        return WeatherForecastSchema.parse(res.data);
    },

});