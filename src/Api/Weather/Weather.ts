import { AxiosInstance } from "axios";
import { ZodError } from "zod";
import { WeatherCurrentSchema, WeatherForecastSchema } from "./Weather.schemas";

export const initApi = (client: AxiosInstance) => ({

    currentByCity: async (city: string) => {
        try {
            const res = await client.get("/current.json", { params: { q: city } });

            return WeatherCurrentSchema.parse(res.data);
        } catch (err) {
            if (err instanceof ZodError) throw err;
            throw new Error("Weather API request failed");
        }
    },

    forecastByCity: async (city: string, days = 3) => {
        try {
            const res = await client.get("/forecast.json", {
                params: { q: city, days },
            });

            return WeatherForecastSchema.parse(res.data);
        } catch (err) {
            if (err instanceof ZodError) throw err;
            throw new Error("Weather API request failed");
        }
    },
});