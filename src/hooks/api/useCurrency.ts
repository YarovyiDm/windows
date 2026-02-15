import { useQuery } from "@tanstack/react-query";
import { API } from "api";
import { QUERY_KEYS } from "utils/query-keys";

export const useCurrency = () =>
    useQuery({
        queryKey: QUERY_KEYS.CURRENCY,
        queryFn: () => API.currency.getCurrency(),
    });
