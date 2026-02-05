import { Box } from "@mui/material";
import React from "react";
import { Apps } from "Components/index";
import { useAppSelector } from "Store/index";
import { selectTaskBarApps } from "Store/selectors/TaskBar";
import Search from './Components/Search/Search';
import Start from "./Components/Start/Start";
import type { MainProps } from './Main.types';

const Main = ({ refs }: MainProps) => {
    const taskBarApps = useAppSelector(selectTaskBarApps);

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Start refs={refs} />
            <Search />
            <Apps apps={taskBarApps} />
        </Box>
    );
};

export default Main;