import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "utils/query-keys";
import { API } from "api";

export const useUserLocation = () =>
    useQuery({
        queryKey: QUERY_KEYS.USER_LOCATION,
        queryFn: () => API.userLocation.userLocationByIP(),
    });
