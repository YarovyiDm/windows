export const QUERY_KEYS = {
    WEATHER: {
        CURRENT: (city: string) => ["weather", "current", city],
        FORECAST: (city: string) => ["weather", "forecast", city],
    },
    USER_LOCATION: ["userLocation"],
    CURRENCY: ["currencies"],
};