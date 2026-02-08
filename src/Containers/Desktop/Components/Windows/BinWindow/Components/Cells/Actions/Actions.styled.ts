import { styled, Box } from "@mui/material";

export const ActionButtonWrapper = styled(Box)({
    cursor: "pointer",
    borderRadius: "5px",
    height: "30px",
    width: "30px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover":{
        background: '#202020',
    },
    svg:
        {
            width: "20px",
            height: '20px',
        },
});