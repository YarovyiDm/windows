import { getFolderById } from "domain/desktop/queries/getFolderById";
import { getFileById } from "domain/desktop/queries/getFileById";
import { getInnerContent } from "domain/desktop/queries/getInnerContent";
import { FILE_META } from "constants/system";
import { createSelector } from "@reduxjs/toolkit";
import { isFolder } from "utils/isFolder";
import type { RootState } from "..";
import type { Desktop } from "types/desktop";

export const selectDesktop = (state: RootState) => state.desktop;
export const selectRoot = (state: RootState) => state.desktop.root;

export const selectFiles = createSelector(
    selectDesktop,
    (state: Desktop) => {
        const desktopFiles = getFolderById(state.root, FILE_META.DESKTOP.id);

        if(desktopFiles && isFolder(desktopFiles)) {
            return desktopFiles.innerContent;
        }
    },
);

export const selectBinFiles = createSelector(
    selectDesktop,
    (state: Desktop) => {
        const bin = getFileById(state.root, FILE_META.BIN.id);

        if(getInnerContent(bin).length) return getInnerContent(bin);
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
        selectDesktop,
        (state: Desktop) => {
            return getFolderById(state.root, id);
        },
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