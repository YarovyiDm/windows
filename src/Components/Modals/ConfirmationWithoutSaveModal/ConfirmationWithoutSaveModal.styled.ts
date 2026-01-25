import { styled, Box } from "@mui/material";

export const ConfirmationWrapper = styled(Box)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255 255 255 / 50%)",
    borderRadius: "10px",
});

export const ConfirmationModal = styled(Box)({
    minWidth: "280px",
    height: "140px",
    background: "#ffffff",
    border: "solid 1px #a1a1a1",
    padding: "30px",
});

export const ConfirmationTitle = styled(Box)({
    fontSize: "21px",
    marginBottom: "10px",
});

export const ConfirmationSubTitle = styled(Box)({
    fontSize: "14px",
    marginBottom: "50px",
});

export const ConfirmationButtonsWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
});

export const ConfirmationButton = styled(Box)({
    height: "30px",
    borderRadius: "0",
    border: "2px solid transparent",
    flex: "1",
    textAlign: "center",
    whiteSpace: "nowrap",
    backgroundColor: "#f4f4f4",
    fontSize: "14px",
    cursor: "pointer",
    '&:hover': {
        border: 'solid 2px grey',
    },
    '&:first-child': {
        color: 'white',
        background: '#1b79f1',
        '&:hover': {
            color: 'black',
            background: '#bdbdbd',
        },
    },
});