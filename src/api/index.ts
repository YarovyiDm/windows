import { currencyClient } from "api/currency/currency.client";
import { weatherClient } from "./weather/weather.client";
import * as weather from "./weather/weather";
import * as userLocation from "./userLocation/userLocation";
import * as currency from "./currency/currency";
import { locationClient } from "./userLocation/userLocation.client";

export const API = {
    weather: weather.initApi(weatherClient),
    userLocation: userLocation.initApi(locationClient),
    currency: currency.initApi(currencyClient),
};