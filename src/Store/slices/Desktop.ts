import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Desktop, DesktopFile, DesktopWindow, FILE_TYPE, FolderFile } from "Types/Desktop";
import { ICONS } from "Constants/Icons";
import { SYSTEM_SLICES } from "Constants/System";

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
        },
        {
            name: "Check what I have",
            icon: ICONS.FOLDER,
            type: FILE_TYPE.FOLDER,
            innerContent: [],
            id: "223/",
            isSelected: false,
            parentId: FILE_TYPE.DESKTOP,
        },
        {
            name: "Github",
            icon: ICONS.GITHUB,
            isSelected: false,
            type: FILE_TYPE.LINK,
            id: "github",
            link: "https://github.com/YarovyiDm/windows",
            parentId: FILE_TYPE.DESKTOP,
        },
        {
            name: "LinkedIn",
            icon: ICONS.LINKEDIN,
            isSelected: false,
            type: FILE_TYPE.LINK,
            id: "linkedin",
            link: "https://www.linkedin.com/in/dmytro-yarovyi-31072b152/",
            parentId: FILE_TYPE.DESKTOP,
        },
        {
            name: "Кошик",
            icon: ICONS.BIN,
            type: FILE_TYPE.FOLDER,
            innerContent: [],
            id: "ds5",
            isSelected: false,
            parentId: FILE_TYPE.DESKTOP,
        },
    ],
    selectedFiles: [],
    bin: [],
    openedWindows: [],
    draggingFile: null,
};

const desktopSlice = createSlice({
    name: SYSTEM_SLICES.DESKTOP,
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

            let file: DesktopFile | undefined;
            let fileIndex = state.desktopFiles.findIndex(f => f.id === fileId);
            let parentFolder: FolderFile | undefined;

            if (fileIndex !== -1) {
                file = state.desktopFiles[fileIndex];
            } else {
                for (const f of state.desktopFiles) {
                    if (f.type === FILE_TYPE.FOLDER) {
                        const idx = f.innerContent.findIndex(inner => inner.id === fileId);

                        if (idx !== -1) {
                            file = f.innerContent[idx];
                            parentFolder = f;
                            fileIndex = idx;
                            break;
                        }
                    }
                }
            }

            if (!file) return;

            if (fileId === folderId) return;

            if (folderId === FILE_TYPE.DESKTOP) {
                if (parentFolder) {
                    parentFolder.innerContent.splice(fileIndex, 1);
                } else {
                    return;
                }

                state.desktopFiles.push({
                    ...file,
                    parentId: undefined,
                    isSelected: false,
                });

                return;
            }

            const folder = state.desktopFiles.find(
                f => f.id === folderId && f.type === FILE_TYPE.FOLDER,
            ) as FolderFile | undefined;

            if (!folder) return;

            if (file.parentId === folderId) return;

            if (parentFolder) {
                parentFolder.innerContent.splice(fileIndex, 1);
            } else {
                state.desktopFiles.splice(fileIndex, 1);
            }

            folder.innerContent.push({
                ...file,
                parentId: folderId,
                isSelected: false,
            });
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
    addDesktopFile,
    openWindow,
    closeWindow,
    changeWindowZindex,
    updateFile,
    dragFileToFolder,
    renameFile,
    setDraggingFile,
} = desktopSlice.actions;
