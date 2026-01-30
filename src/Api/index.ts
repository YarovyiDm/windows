import { weatherClient } from "./Weather/Weather.client";
import * as weather from "./Weather/Weather";

export const API = {
    weather: weather.initApi(weatherClient),
};