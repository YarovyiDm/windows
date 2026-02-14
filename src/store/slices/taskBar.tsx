import { ICONS } from "constants/icons";
import { FILE_META, SYSTEM_SLICES, WINDOW_META } from "constants/system";
import { map } from "lodash";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { FILE_TYPE } from "types/desktop";
import type { TaskBarModal, TaskBarState } from "types/taskBar";

const initialTaskBarState: TaskBarState = {
    taskBarApps: [
        {
            id: FILE_META.ROOT.id,
            icon: ICONS.FOLDER,
            name: WINDOW_META.EXPLORER.title,
            type: FILE_TYPE.FOLDER,
            isOpen: false,
            isFocused: false,
        },
        {
            id: FILE_TYPE.BROWSER,
            icon: ICONS.BROWSER,
            name: WINDOW_META.BROWSER.title,
            type: FILE_TYPE.BROWSER,
            isOpen: false,
            isFocused: false,
        },
    ],
    modalStack: [],
};

const taskBarSlice = createSlice({
    name: SYSTEM_SLICES.TASK_BAR,
    initialState: initialTaskBarState,
    reducers: {
        openingApp(state: TaskBarState, action) {
            state.taskBarApps[action.payload].isOpen = true;
        },
        changeApp(state: TaskBarState, action) {
            map(state.taskBarApps, item => (item.isFocused = false));
            state.taskBarApps[action.payload].isFocused = true;
        },

        openModal(state, action: PayloadAction<TaskBarModal>) {
            const modal = action.payload;

            if (!state.modalStack.includes(modal)) {
                state.modalStack.push(modal);
            }
        },

        closeModal(state) {
            state.modalStack.pop();
        },

        closeAllModals(state) {
            state.modalStack = [];
        },
    },
});

export default taskBarSlice.reducer;
export const {
    openingApp,
    closeModal,
    closeAllModals,
    openModal,
    changeApp,
} = taskBarSlice.actions;
