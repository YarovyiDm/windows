import { moveToBin } from "domain/desktop/mutations/moveToBin";
import { deleteFilePermanently } from "domain/desktop/mutations/deleteFilePermanently";
import { restoreFile } from "domain/desktop/mutations/restoreFile";
import { attachFile } from "domain/desktop/mutations/attachFile";
import { getFileById } from "domain/desktop/queries/getFileById";
import { dragFile } from "domain/desktop/mutations/dragFile";
import { updateFile } from "domain/desktop/mutations/updateFile";
import { updateFileName } from "domain/desktop/mutations/updateFileName";
import { bringWindowToFront } from "domain/desktop/mutations/bringWindowToFront";
import { ICONS } from "constants/icons";
import { DISK_TYPES, FILE_META, SYSTEM_SLICES } from "constants/system";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Desktop, type DesktopFile, type DesktopWindow, FILE_TYPE } from "types/desktop";
import { RootInitialContent } from "store/slices/root.initial";

const initialDesktopState: Desktop = {
    root: {
        name: FILE_META.ROOT.name,
        icon: ICONS.FOLDER,
        type: FILE_TYPE.FOLDER,
        innerContent: RootInitialContent,
        id: FILE_META.ROOT.id,
        isSelected: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        diskId: DISK_TYPES.ROOT,
    },
    selectedFiles: [],
    openedWindows: [],
    draggingFile: null,
};

const desktopSlice = createSlice({
    name: SYSTEM_SLICES.DESKTOP,
    initialState: initialDesktopState,
    reducers: {
        removeFile(
            state: Desktop,
            action: PayloadAction<string>,
        ) {
            moveToBin(state, action.payload);
        },

        removeFileForever(
            state: Desktop,
            action: PayloadAction<string>,
        ) {
            deleteFilePermanently(state, action.payload);
        },

        restoreFileFromBin(
            state: Desktop,
            action: PayloadAction<string>,
        ) {
            restoreFile(state, action.payload);
        },

        setDraggingFile(
            state,
            action: PayloadAction<DesktopFile & { initialCursorPos: {x: number; y: number;};} | null>,
        ) {
            state.draggingFile = action.payload;
        },

        clearSelection(state: Desktop) {
            state.selectedFiles = [];
        },

        selectMultipleFiles(
            state: Desktop,
            action: PayloadAction<Array<string>>,
        ) {
            state.selectedFiles = action.payload;
        },

        addDesktopFile(
            state,
            action: PayloadAction<DesktopFile>,
        ) {
            attachFile(state, action.payload);
        },

        openWindow(
            state,
            action: PayloadAction<DesktopWindow>,
        ) {
            if (!state.openedWindows.find(w => w.id === action.payload.id)) {
                state.openedWindows.push(action.payload);
            }
        },

        closeWindow(
            state,
            action: PayloadAction<string>,
        ) {
            state.openedWindows = state.openedWindows.filter(w => w.id !== action.payload);
        },

        closeAllWindows(state: Desktop) {
            state.openedWindows = [];
        },

        changeWindowZindex(
            state: Desktop,
            action: PayloadAction<string>,
        ) {
            bringWindowToFront(state.openedWindows, action.payload);
        },

        updateFileInRoot(
            state: Desktop,
            action: PayloadAction<{
                id: string;
                newValue: string;
                size?: number;
            }>,
        ) {
            const { id, newValue, size } = action.payload;

            updateFile(state.root, id, newValue, size);
        },

        dragFileToFolder(
            state: Desktop,
            action: PayloadAction<{ fileId: string; folderId: string; }>,
        ) {
            const { fileId, folderId } = action.payload;

            dragFile(state, fileId, folderId);
        },

        renameFile(
            state: Desktop,
            action: PayloadAction<{ id: string; newName: string; }>,
        ) {
            const{ id, newName } = action.payload;
            const file = getFileById(state.root, id);

            if (file) updateFileName(file, newName);
        },
    },
});

export default desktopSlice.reducer;
export const {
    removeFile,
    clearSelection,
    selectMultipleFiles,
    addDesktopFile,
    openWindow,
    closeWindow,
    closeAllWindows,
    changeWindowZindex,
    updateFileInRoot,
    dragFileToFolder,
    renameFile,
    setDraggingFile,
    removeFileForever,
    restoreFileFromBin,
} = desktopSlice.actions;
