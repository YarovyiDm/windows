export const QUERY_KEYS = {
    WEATHER: {
        CURRENT: (city: string) => ["WEATHER", "CURRENT", city],
        FORECAST: (city: string) => ["WEATHER", "FORECAST", city],
    },
    USER_LOCATION: ["USER_LOCATION"],
    CURRENCY: ["CURRENCY"],
};