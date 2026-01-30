import { styled, Box, Typography } from "@mui/material";
import lockScreenBg from "../../../assets/lockScreen.png";

interface LockScreenProps {
    isBlur?: boolean;
}

interface InputProps {
    isError?: boolean;
}

export const LockScreenWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isBlur",
})<LockScreenProps>(({ isBlur }) => ({
    width: "calc(100vw - 240px)",
    height: "calc(100vh - 240px)",
    position: "relative",
    padding: "120px",
    display: "flex",

    "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${lockScreenBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "filter 0.3s ease",
        filter: isBlur ? "blur(10px)" : "none",
        zIndex: -1,
    },
}));

export const DateTimeContainer = styled(Box)({
    color: "white",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
});

export const TimeWrapper = styled(Box)({
    fontSize: "120px",
});

export const LoginWrapper = styled(Box)({
    position: "relative",
    zIndex: 1,
    color: "white",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    width: "230px",
});

export const AvatarWrapper = styled(Box)({
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    background: "#bfbfbf",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
    "svg": {
        width: "80px",
        height: "80px",
        fill: "#ffffff",
    },
});

export const UserNameStyled = styled(Typography)({
    fontSize: "35px",
    fontWeight: 100,
    marginBottom: "20px",
});

export const InputWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isError",
})<InputProps>(({ isError }) => ({
    display: "flex",
    width: "100%",
    "& input": {
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        color: "white",
        height: "25px",
        border: "solid 1px grey",
        borderRight: "none",
        borderBottom: isError && "solid 1px red",
        "&::placeholder": {
            color: "white",
        },
        "&:focus": {
            outline: "none",
        },
    },
}));

export const IconWrapper = styled(Box)({
    width: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#89bdd7",
    border: "1px solid white",
    borderLeft: "none",
    "svg": {
        width: "20px",
        height: "20px",
    },
});
