import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { Box } from "@mui/material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { useCurrency } from "hooks/api/useCurrency";
import { humanReadable } from "./Widget.helpers";
import { WidgetWrapper } from "./Widget.styled";

type Props = {
    isOpen: boolean;
};

const Widget = forwardRef<HTMLDivElement, Props>(
    ({ isOpen }, ref) => {
        const {
            data,
            isLoading,
            isError,
            error,
            isFetching,
        } = useCurrency();

        if (isLoading || isFetching) return <div>Loading currency…</div>;
        if (isError) return <div>Failed to load currency: {String(error)}</div>;
        if (!data) return <div>No currency data</div>;

        return createPortal(
            <WidgetWrapper ref={ref} isOpened={isOpen} onMouseDown={e => e.stopPropagation()}>
                {humanReadable(data).map((item, index) => {
                    return <Box key={`${index} + ${item.date}`} display='flex' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' alignItems='center' gap={1}>{item.from} <EastOutlinedIcon /> {item.to}</Box>
                        <Box >{item.rateBuy} UAH</Box>
                        <Box >{item.date}</Box>
                    </Box>;
                })}
            </WidgetWrapper>,
            document.body,
        );
    },
);

export default Widget;
