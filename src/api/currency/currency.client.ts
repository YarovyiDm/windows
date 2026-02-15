import axios from "axios";
import { ENV } from "utils/env";

export const currencyClient = axios.create({
    baseURL: ENV.REACT_APP_MONO_CURRENCY_API_URL,
});