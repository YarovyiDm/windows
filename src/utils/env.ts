const getEnv = (name: string): string => {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
};

export const ENV = {
    WEATHER_API_KEY: getEnv("REACT_APP_WEATHER_API_KEY"),
    WEATHER_API_URL: getEnv("REACT_APP_WEATHER_API_URL"),
    USER_LOCATION_API_URL: getEnv("REACT_APP_USER_LOCATION_API_URL"),
    MODE: getEnv("REACT_APP_ENV"),
    REACT_APP_MONO_CURRENCY_API_URL: getEnv("REACT_APP_MONO_CURRENCY_API_URL"),
};