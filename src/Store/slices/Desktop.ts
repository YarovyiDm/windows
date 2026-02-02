import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BIN, DESKTOP, FOLDER } from "Constants/Desktop";
import { Desktop, DesktopFile, DesktopWindow, FILE_TYPE } from "Types/Desktop";
import { ICONS } from "Constants/System";

const initialDesktopState: Desktop = {
    desktopFiles: [
        {
            name: "Read me!",
            icon: ICONS.TEXT_FILE,
            position: { x: 50, y: 50 },
            type: FILE_TYPE.TEXT,
            innerContent: "",
            id: ":2d",
            isSelected: false,
        },
        {
            name: "Check what I have",
            icon: FOLDER,
            position: { x: 50, y: 150 },
            type: FILE_TYPE.FOLDER,
            innerContent: [],
            id: "223/",
            isSelected: false,
        },
        {
            name: "Github",
            icon: ICONS.GITHUB,
            position: { x: 50, y: 250 },
            isSelected: false,
            type: FILE_TYPE.LINK,
            id: "github",
            link: "https://github.com/YarovyiDm/windows",
        },
        {
            name: "LinkedIn",
            icon: ICONS.LINKEDIN,
            position: { x: 50, y: 350 },
            isSelected: false,
            type: FILE_TYPE.LINK,
            id: "linkedin",
            link: "https://www.linkedin.com/in/dmytro-yarovyi-31072b152/",
        },
        {
            name: "Кошик",
            icon: BIN,
            position: { x: 1800, y: 750 },
            type: FILE_TYPE.FOLDER,
            innerContent: [],
            id: "ds5",
            isSelected: false,
        },
    ],
    selectedFiles: [],
    bin: [],
    openedWindows: [],
};

const desktopSlice = createSlice({
    name: DESKTOP,
    initialState: initialDesktopState,
    reducers: {
        removeFile(state: Desktop, action: PayloadAction<string>) {
            const fileToRemove = state.desktopFiles.find(
                item => item.id === action.payload,
            );

            if (fileToRemove) {
                state.desktopFiles = state.desktopFiles.filter(
                    item => item.id !== action.payload,
                );
                state.bin.push(fileToRemove);
            }
        },
        changeFilePosition(
            state: Desktop,
            action: PayloadAction<{
                fileId: string;
                position: { x: number; y: number; };
            }>,
        ) {
            const file = state.desktopFiles.find(
                file => file.id === action.payload.fileId,
            );

            if (file) {
                file.position = action.payload.position;
            }
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
                newValue: Array<DesktopFile> | string;
                size?: number;
            }>,
        ) {
            const { id, newValue, size } = action.payload;
            const currentFile = state.desktopFiles.filter(
                item => item.id === id,
            )[0];

            if('innerContent' in currentFile) {
                currentFile.innerContent = newValue;
            }

            if(size){
                currentFile.size = size;
            }
        },
        dragFileToFolder(
            state: Desktop,
            action: PayloadAction<{ fileId: string; folderId: string; }>,
        ) {
            const { fileId, folderId } = action.payload;
            const fileIndex = state.desktopFiles.findIndex(f => f.id === fileId);
            const targetFolderIndex = state.desktopFiles.findIndex(f => f.id === folderId);

            if (fileIndex === -1 || targetFolderIndex === -1) return;

            const file = state.desktopFiles[fileIndex];
            const targetFolder = state.desktopFiles[targetFolderIndex];

            if (targetFolder.type === FILE_TYPE.FOLDER) {
                state.desktopFiles[targetFolderIndex] = {
                    ...targetFolder,
                    innerContent: [...targetFolder.innerContent, { ...file, position: { x:0, y:0 } }],
                };

                state.desktopFiles = state.desktopFiles.filter((_, idx) => idx !== fileIndex);
            }
        },
        renameFile(state: Desktop, action: PayloadAction<{ id: string; newName: string; }>) {
            const file = state.desktopFiles.find(file => file.id === action.payload.id);

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
    changeFilePosition,
    addDesktopFile,
    openWindow,
    closeWindow,
    changeWindowZindex,
    updateFile,
    dragFileToFolder,
    renameFile,
} = desktopSlice.actions;
