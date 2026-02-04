import axios from "axios";
import * as bc from "Utils/build-config";

export const locationClient = axios.create({
    baseURL: bc.USER_LOCATION_API_URL,
});