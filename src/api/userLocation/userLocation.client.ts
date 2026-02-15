import axios from "axios";
import { ENV } from "utils/env";

export const locationClient = axios.create({
    baseURL: ENV.USER_LOCATION_API_URL,
});