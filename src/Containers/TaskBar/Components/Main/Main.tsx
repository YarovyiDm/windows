import { Box } from "@mui/material";
import React from "react";
import { Apps } from "Components/index";
import Search from './Components/Search/Search';
import Start from "./Components/Start/Start";
import type { MainProps } from './Main.types';

const Main = ({ refs }: MainProps) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Start refs={refs} />
            <Search />
            <Apps />
        </Box>
    );
};

export default Main;