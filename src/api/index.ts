import { weatherClient } from "./weather/weather.client";
import * as weather from "./weather/weather";
import * as userLocation from "./userLocation/userLocation";
import { locationClient } from "./userLocation/userLocation.client";

export const API = {
    weather: weather.initApi(weatherClient),
    userLocation: userLocation.initApi(locationClient),
};