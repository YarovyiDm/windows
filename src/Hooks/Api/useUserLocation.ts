import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "Utils";
import { API } from "../../Api";

export const useUserLocation = () =>
    useQuery({
        queryKey: QUERY_KEYS.USER_LOCATION,
        queryFn: () => API.userLocation.userLocationByIP(),
    });
