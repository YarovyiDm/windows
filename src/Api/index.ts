import { weatherClient } from "./Weather/Weather.client";
import * as weather from "./Weather/Weather";
import * as userLocation from "./UserLocation/UserLocation";
import { locationClient } from "./UserLocation/UserLocation.client";

export const API = {
    weather: weather.initApi(weatherClient),
    userLocation: userLocation.initApi(locationClient),
};