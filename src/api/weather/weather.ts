import { ZodError } from "zod";
import { WeatherCurrentSchema, WeatherForecastSchema } from "./weather.schemas";
import type { AxiosInstance } from "axios";

export const initApi = (client: AxiosInstance) => ({
    getCurrentByCity: async (city: string) => {
        try {
            const res = await client.get("/current.json", { params: { q: city } });

            return WeatherCurrentSchema.parse(res.data);
        } catch (err) {
            if (err instanceof ZodError) throw err;
            throw new Error("Weather API request failed");
        }
    },

    getForecastByCity: async (city: string, days = 3) => {
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