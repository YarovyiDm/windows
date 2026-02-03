import { Box } from "@mui/material";
import React from "react";
import { Apps } from "Components/index";
import { RootState, useAppDispatch, useAppSelector } from "Store/index";
import { ModalNames } from "Types/TaskPanelTypes";
import { toggleModal } from "Store/slices/TaskPanelSlice";
import Search from 'Containers/TaskBar/Components/Main/Components/Search/Search';
import Start from "Containers/TaskBar/Components/Main/Components/Start/Start";
import type { MainProps } from './Main.types';

const Main = ({ refs, setCurrentModal }: MainProps) => {
    const { taskPanelApps, isWindowsModalOpen } = useAppSelector((state: RootState) => state.taskPanel);
    const dispatch = useAppDispatch();

    const handleModalChange = (name: ModalNames) => {
        setCurrentModal(name);
        dispatch(toggleModal({ modalName: name }));
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Start refs={refs} handleModalChange={handleModalChange} isWindowsModalOpen={isWindowsModalOpen} />
            <Search />
            <Apps apps={taskPanelApps} />
        </Box>
    );
};

export default Main;