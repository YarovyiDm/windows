import { useEffect } from "react";
import { useAppDispatch } from "store/index";
import { changeUserLocationCity } from "store/slices/system";
import { useUserLocation } from "hooks/api";

export const useUpdateUserCity = (location: ReturnType<typeof useUserLocation>) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (location.isSuccess && location.data?.city) {
            dispatch(changeUserLocationCity(location.data.city));
        }
    }, [location.isSuccess, location.data?.city, dispatch]);
};