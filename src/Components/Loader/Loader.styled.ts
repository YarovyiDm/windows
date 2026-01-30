import { styled, Box, keyframes } from "@mui/material";

const fade = keyframes`
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper =  styled(Box)({
    position: "relative",
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: `${rotate} 1.5s linear infinite`,
});

export const LoaderItem = styled(Box)({
    position: "absolute",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "white",
    opacity: "0",
    animation: `${fade} 1.5s linear infinite`,
    ":nth-of-type(1)": {
        transform: "rotate(0deg) translate(30px)",
        animationDelay: "0s",
    },
    "&:nth-of-type(2)": {
        transform: "rotate(30deg) translate(30px)",
        animationDelay: "0.1s",
    },
    "&:nth-of-type(3)": {
        transform: "rotate(60deg) translate(30px)",
        animationDelay: "0.2s",
    },
    "&:nth-of-type(4)": {
        transform: "rotate(90deg) translate(30px)",
        animationDelay: "0.3s",
    },
    "&:nth-of-type(5)": {
        transform: "rotate(120deg) translate(30px)",
        animationDelay: "0.4s",
    },
});