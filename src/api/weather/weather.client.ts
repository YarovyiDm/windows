import axios from "axios";
import { ENV } from "utils/env";

export const weatherClient = axios.create({
    baseURL: ENV.WEATHER_API_URL,
    params: {
        key: ENV.WEATHER_API_KEY,
    },
});