import { useQuery } from "@tanstack/react-query";
import { API } from "../../Api";
import { QUERY_KEYS } from '../../utils/query-keys';

export const useUserLocation = () =>
    useQuery({
        queryKey: QUERY_KEYS.USER_LOCATION,
        queryFn: () => API.userLocation.userLocationByIP(),
    });
