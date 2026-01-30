import { styled, Box, keyframes  } from "@mui/material";

const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const TextWindowWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "calc(100% - 10px)",
    "textarea": {
        width: "calc(100% - 20px)",
        height: "calc(100% - 20px)",
        background: "#cfcfcf",
        padding: "10px",
        resize: "none",
        border: "none",
        "&:focus": {
            outline: "none",
        },
    },
});

export const TextWindowSaveMessage = styled(Box)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "grey",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    opacity: "0",
    animation: `${fadeInOut} 2s forwards`,
});

export const TextWindowFooter = styled(Box)({
    display: "flex",
    height: "30px",
    width: "calc(100% - 20px)",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: "0 10px",
    fontSize: "11px",
});

export const TextWindowFileFormat = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "180px",
});