import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { useRef, useState } from "react";
import { Typography } from '@mui/material';
import { useClickOutside } from "hooks/useClickOutside";
import { CurrencyTrigger, CurrencyWrapper } from "./Currency.styled";
import Widget from "./Components/Widget/Widget";

const Currency = () => {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);
    const currencyRef = useRef<HTMLDivElement>(null);

    useClickOutside(currencyRef, () => {
        setIsWidgetOpen(false);
    });

    return(
        <CurrencyWrapper ref={currencyRef}>
            <CurrencyTrigger onClick={() => setIsWidgetOpen(prev => !prev)}>
                <CurrencyExchangeOutlinedIcon />
                <Typography>Currency</Typography>
            </CurrencyTrigger>
            <Widget isOpen={isWidgetOpen}/>
        </CurrencyWrapper>
    );
};

export default Currency;