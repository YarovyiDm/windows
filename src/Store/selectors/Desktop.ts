import { createSelector } from "@reduxjs/toolkit";
import { Desktop } from "Types/Desktop";
import { WINDOW_META } from "Constants/System";
import { isFolder } from "Utils/isFolder";
import { findFolder } from "Utils/findFolder";
import { RootState } from "..";

const selectDesktop = (state: RootState) => state.desktop;

export const selectFiles = createSelector(
    selectDesktop,
    (state: Desktop) => state.desktopFiles,
);

export const selectBinFiles = createSelector(
    selectDesktop,
    (state: Desktop) => {
        const bin = state.desktopFiles.find((file) => file.id === WINDOW_META.BIN.id);

        if(bin && isFolder(bin)) return bin.innerContent || [];
    },
);

export const selectOpenedWindows = createSelector(
    selectDesktop,
    (state: Desktop) => state.openedWindows,
);

export const selectWindowZindex = (id: string) =>
    createSelector(
        selectDesktop,
        (state: Desktop) =>
            state.openedWindows.filter(item => item.id === id)[0].zIndex,
    );

export const selectFolder = (id: string) =>
    createSelector(
        (state: RootState) => state.desktop.desktopFiles,
        desktopFiles => findFolder(desktopFiles, id),
    );

export const selectDraggableFile = () =>
    createSelector(
        selectDesktop,
        (state: Desktop) =>
            state.draggingFile,
    );

export const selectOpenedWindowLength = createSelector(
    selectDesktop,
    (state: Desktop) => state.openedWindows.length,
);