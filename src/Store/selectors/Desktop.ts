import { createSelector } from "@reduxjs/toolkit";
import { Desktop, FILE_TYPE } from "Types/Desktop";
import { RootState } from "..";

const selectDesktop = (state: RootState) => state.desktop;

export const selectFiles = createSelector(
    selectDesktop,
    (state: Desktop) => state.desktopFiles,
);

export const selectIsWindowOpen = (windowId: string) =>
    createSelector(
        selectDesktop,
        (state: Desktop) =>
            state.openedWindows.filter(window => window.id === windowId)
                .length,
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

export const selectFolder = (id: string) => (state: RootState) =>
    state.desktop.desktopFiles.find(
        file => file.id === id && file.type === FILE_TYPE.FOLDER,
    );

export const selectDraggableFile = () =>
    createSelector(
        selectDesktop,
        (state: Desktop) =>
            state.draggingFile,
    );
