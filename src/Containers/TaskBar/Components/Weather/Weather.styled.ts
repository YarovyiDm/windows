import { styled, Box } from "@mui/material";

export const WeatherWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    gap: 1,
    padding: "5px",
    borderRadius: "8px",
    "&:has(.weather-trigger:hover)": {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
});

export const WeatherIcon = styled(Box)({
    width: 30,
    height: 30,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
});

export const WeatherTrigger = styled(Box)({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    gap: "10px",
});