import axios from "axios";
import * as bc from "../../utils/build-config";

export const weatherClient = axios.create({
    baseURL: bc.WEATHER_API_URL,
    params: {
        key: bc.WEATHER_API_KEY,
    },
});