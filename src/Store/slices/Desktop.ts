import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BIN, DESKTOP, FOLDER } from "Constants/Desktop";
import { Desktop, DesktopFile, DesktopWindow, FILE_TYPE, FolderDesktopFile } from "Types/Desktop";
import { ICONS } from "Constants/System";

const initialDesktopState: Desktop = {
    desktopFiles: [
        {
            name: "Read me!",
            icon: ICONS.TEXT_FILE,
            // position: { x: 0, y: 50 },
            type: FILE_TYPE.TEXT,
            innerContent: "",
            id: ":2d",
            isSelected: false,
            parentId: "DESKTOP",
        },
        {
            name: "Check what I have",
            icon: FOLDER,
            // position: { x: 0, y: 150 },
            type: FILE_TYPE.FOLDER,
            innerContent: [],
            id: "223/",
            isSelected: false,
            parentId: "DESKTOP",
        },
        {
            name: "Github",
            icon: ICONS.GITHUB,
            // position: { x: 0, y: 250 },
            isSelected: false,
            type: FILE_TYPE.LINK,
            id: "github",
            link: "https://github.com/YarovyiDm/windows",
            parentId: "DESKTOP",
        },
        {
            name: "LinkedIn",
            icon: ICONS.LINKEDIN,
            // position: { x: 0, y: 350 },
            isSelected: false,
            type: FILE_TYPE.LINK,
            id: "linkedin",
            link: "https://www.linkedin.com/in/dmytro-yarovyi-31072b152/",
            parentId: "DESKTOP",
        },
        {
            name: "Кошик",
            icon: BIN,
            // position: { x: 0, y: 450 },
            type: FILE_TYPE.FOLDER,
            innerContent: [],
            id: "ds5",
            isSelected: false,
            parentId: "DESKTOP",
        },
    ],
    selectedFiles: [],
    bin: [],
    openedWindows: [],
    draggingFile: null,
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
        setDraggingFile(state, action: PayloadAction<DesktopFile & { initialCursorPos: {x: number; y: number;};} | null>) {
            state.draggingFile = action.payload;
        },
        // changeFilePosition(
        //     state: Desktop,
        //     action: PayloadAction<{
        //         fileId: string;
        //         position: { x: number; y: number; };
        //     }>,
        // ) {
        //     const file = state.desktopFiles.find(
        //         file => file.id === action.payload.fileId,
        //     );
        //
        //     if (file) {
        //         file.position = action.payload.position;
        //     }
        // },
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

            // 1. знаходимо файл у desktopFiles або всередині папок
            let file: DesktopFile | undefined;
            let fileIndex = state.desktopFiles.findIndex(f => f.id === fileId);
            let parentFolder: FolderDesktopFile | undefined;

            if (fileIndex !== -1) {
                file = state.desktopFiles[fileIndex];
            } else {
                // шукаємо файл у папках
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

            // 2. не даємо кинути файл сам у себе
            if (fileId === folderId) return;

            // 3. кидаємо на десктоп
            if (folderId === "DESKTOP") {
                // якщо файл був у папці — прибираємо з папки
                if (parentFolder) {
                    parentFolder.innerContent.splice(fileIndex, 1);
                } else {
                    // файл вже на десктопі — нічого не робимо
                    return;
                }

                // додаємо файл на десктоп
                state.desktopFiles.push({
                    ...file,
                    parentId: undefined,
                    isSelected: false,
                });

                return;
            }

            // 4. кидаємо у папку
            const folder = state.desktopFiles.find(
                f => f.id === folderId && f.type === FILE_TYPE.FOLDER,
            ) as FolderDesktopFile | undefined;

            if (!folder) return;

            // якщо файл вже в цій папці — нічого не робимо
            if (file.parentId === folderId) return;

            // прибираємо файл з десктопу або з попередньої папки
            if (parentFolder) {
                parentFolder.innerContent.splice(fileIndex, 1);
            } else {
                state.desktopFiles.splice(fileIndex, 1);
            }

            // кладемо файл у папку
            folder.innerContent.push({
                ...file,
                parentId: folderId, // координати всередині папки
                isSelected: false,
            });
        },
        renameFile(state: Desktop, action: PayloadAction<{ id: string; newName: string; }>) {
            const file = state.desktopFiles.find(file => file.id === action.payload.id);

            if (file) {
                file.name = action.payload.newName;
            }
        },
        dropFileFromFolderToDesktop(
            state: Desktop,
            action: PayloadAction<{ draggingFileId: string; sourceFolderId: string; }>,
        ) {
            const { draggingFileId, sourceFolderId } = action.payload;

            const sourceFolder = state.desktopFiles.find(
                f => f.id === sourceFolderId && f.type === FILE_TYPE.FOLDER,
            ) as FolderDesktopFile | undefined;

            if (!sourceFolder || !Array.isArray(sourceFolder.innerContent)) return;

            // Тепер TypeScript точно знає, що innerContent — масив
            const fileIndex = sourceFolder.innerContent.findIndex(f => f.id === draggingFileId);

            if (fileIndex === -1) return;

            const file = sourceFolder.innerContent[fileIndex];

            // додаємо копію на desktop
            const fileCopy = { ...file, parentFolderId: null, position: { x: 100, y: 100 } };

            state.desktopFiles.push(fileCopy);

            // видаляємо файл з innerContent папки
            sourceFolder.innerContent.splice(fileIndex, 1);
        }
        ,
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
    dropFileFromFolderToDesktop,
} = desktopSlice.actions;
