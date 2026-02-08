import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeFileFromTree, findFileById, dragFile, updateFileInTree } from "Utils";
import { Desktop, DesktopFile, DesktopWindow, FILE_TYPE } from "Types/Desktop";
import { ICONS } from "Constants/Icons";
import { SYSTEM_SLICES, WINDOW_META } from "Constants/System";
import { findFolder } from "Utils/findFolder";
import { isFolder } from "Utils/isFolder";

const initialDesktopState: Desktop = {
    desktopFiles: [
        {
            name: "Read me!",
            icon: ICONS.TEXT_FILE,
            type: FILE_TYPE.TEXT,
            innerContent: "",
            id: ":2d",
            isSelected: false,
            parentId: FILE_TYPE.DESKTOP,
            created_at: new Date().toISOString(),
        },
        {
            name: "Check what I have",
            icon: ICONS.FOLDER,
            type: FILE_TYPE.FOLDER,
            innerContent: [],
            id: "223/",
            isSelected: false,
            parentId: FILE_TYPE.DESKTOP,
            created_at: new Date().toISOString(),
        },
        {
            name: "Github",
            icon: ICONS.GITHUB,
            isSelected: false,
            type: FILE_TYPE.LINK,
            id: "github",
            link: "https://github.com/YarovyiDm/windows",
            parentId: FILE_TYPE.DESKTOP,
            created_at: new Date().toISOString(),
        },
        {
            name: "LinkedIn",
            icon: ICONS.LINKEDIN,
            isSelected: false,
            type: FILE_TYPE.LINK,
            id: "linkedin",
            link: "https://www.linkedin.com/in/dmytro-yarovyi-31072b152/",
            parentId: FILE_TYPE.DESKTOP,
            created_at: new Date().toISOString(),
        },
        {
            name: "Кошик",
            icon: ICONS.BIN,
            type: FILE_TYPE.BIN,
            innerContent: [],
            id: WINDOW_META.BIN.id,
            isSelected: false,
            parentId: FILE_TYPE.DESKTOP,
            created_at: new Date().toISOString(),
        },
    ],
    selectedFiles: [],
    openedWindows: [],
    draggingFile: null,
};

const desktopSlice = createSlice({
    name: SYSTEM_SLICES.DESKTOP,
    initialState: initialDesktopState,
    reducers: {
        removeFile(state: Desktop, action: PayloadAction<string>) {
            const removed = removeFileFromTree(state.desktopFiles, action.payload);
            const bin = state.desktopFiles.find(file => file.id === WINDOW_META.BIN.id);

            if (removed && bin && isFolder(bin)) bin.innerContent.push(removed);
        },
        removeFileForever(state: Desktop, action: PayloadAction<string>) {
            const bin = state.desktopFiles.find(file => file.id === WINDOW_META.BIN.id);

            if(bin && isFolder(bin)){
                bin.innerContent = bin.innerContent.filter(
                    file => file.id !== action.payload,
                );
            }
        },
        restoreFileFromBin(
            state: Desktop,
            action: PayloadAction<string>,
        ) {
            const fileId = action.payload;

            const bin = state.desktopFiles.find(
                file => file.id === WINDOW_META.BIN.id,
            );

            if (!bin || !('innerContent' in bin) || !Array.isArray(bin.innerContent)) {
                return;
            }

            const index = bin.innerContent.findIndex(
                file => file.id === fileId,
            );

            if (index === -1) return;

            const file = bin.innerContent[index];

            bin.innerContent.splice(index, 1);

            if (file.parentId) {
                const parentFolder = findFolder(
                    state.desktopFiles,
                    file.parentId,
                );

                if (
                    parentFolder && isFolder(parentFolder)
                ) {
                    parentFolder.innerContent.push(file);
                    return;
                }
            }

            file.parentId = FILE_TYPE.DESKTOP;
            state.desktopFiles.push(file);
        },

        setDraggingFile(state, action: PayloadAction<DesktopFile & { initialCursorPos: {x: number; y: number;};} | null>) {
            state.draggingFile = action.payload;
        },
        selectFile(state: Desktop, action: PayloadAction<string>) {
            if (!state.selectedFiles.includes(action.payload)) {
                state.selectedFiles.push(action.payload);
            }
        },
        deselectFile(state: Desktop, action: PayloadAction<string>) {
            if (Array.isArray(state.selectedFiles)) {
                state.selectedFiles = state.selectedFiles.filter(
                    fileName => fileName !== action.payload,
                );
            }
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
        addDesktopFile(state, action: PayloadAction<DesktopFile>) {
            state.desktopFiles.push(action.payload);
        },
        openWindow(state, action: PayloadAction<DesktopWindow>) {
            if (!state.openedWindows.find(w => w.id === action.payload.id)) {
                state.openedWindows.push(action.payload);
            }
        },

        closeWindow(state, action: PayloadAction<string>) {
            state.openedWindows = state.openedWindows.filter(w => w.id !== action.payload);
        },
        closeAllWindows(state: Desktop) {
            state.openedWindows = [];
        },
        changeWindowZindex(state: Desktop, action: PayloadAction<string>) {
            const currentFile = state.openedWindows.find(
                item => item.id === action.payload,
            );

            if (!currentFile) return;

            state.openedWindows.forEach((item, index) => (item.zIndex = index + 2));
            currentFile.zIndex = 99;
        },
        updateFile(
            state: Desktop,
            action: PayloadAction<{
                id: string;
                newValue: string;
                size?: number;
            }>,
        ) {
            const { id, newValue, size } = action.payload;

            updateFileInTree(state.desktopFiles, id, newValue, size);
        },
        dragFileToFolder(
            state: Desktop,
            action: PayloadAction<{ fileId: string; folderId: string; }>,
        ) {
            dragFile(state, action.payload.fileId, action.payload.folderId);
        },
        renameFile(state: Desktop, action: PayloadAction<{ id: string; newName: string; }>) {
            const file = findFileById(state.desktopFiles, action.payload.id);

            if (file) {
                file.name = action.payload.newName;
            }
        },
    },
});

export default desktopSlice.reducer;
export const {
    removeFile,
    selectFile,
    deselectFile,
    clearSelection,
    selectMultipleFiles,
    addDesktopFile,
    openWindow,
    closeWindow,
    closeAllWindows,
    changeWindowZindex,
    updateFile,
    dragFileToFolder,
    renameFile,
    setDraggingFile,
    removeFileForever,
    restoreFileFromBin,
} = desktopSlice.actions;
