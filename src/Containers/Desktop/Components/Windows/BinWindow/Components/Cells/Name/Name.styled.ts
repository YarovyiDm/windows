import { styled, Box } from "@mui/material";

export const NameWrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    width: '100%',
    overflow: 'hidden',
    svg: {
        width: '20px',
        height: '20px',
        flexShrink: 0,
    },
});