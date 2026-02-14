import { z } from "zod";

export const WeatherConditionSchema = z.object({
    text: z.string(),
    icon: z.string(),
});

export const WeatherCurrentSchema = z.object({
    current: z.object({
        temp_c: z.number(),
        feelslike_c: z.number(),
        humidity: z.number(),
        is_day: z.number(),
        condition: WeatherConditionSchema,
    }),
});

export const WeatherDaySchema = z.object({
    date: z.string(),
    day: z.object({
        avgtemp_c: z.number(),
        avghumidity: z.number(),
        condition: WeatherConditionSchema,
    }),
});

export const WeatherForecastSchema = WeatherCurrentSchema.extend({
    forecast: z.object({
        forecastday: z.array(WeatherDaySchema),
    }),
    location: z.object({
        country: z.string(),
        name: z.string(),
    }),
});

export type WeatherForecastType = z.infer<typeof WeatherForecastSchema>;