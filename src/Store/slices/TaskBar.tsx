import { map } from "lodash";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskBarModal, TaskBarState } from "Types/TaskBar";
import { FILE_TYPE } from "Types/Desktop";
import { ICONS } from "Constants/Icons";
import { SYSTEM_SLICES, WINDOW_META } from "Constants/System";

const initialTaskBarState: TaskBarState = {
    taskBarApps: [
        // [TELEGRAM]: {
        //     name: TELEGRAM,
        //     component: <Icon name={TELEGRAM} />,
        //     isOpen: false,
        //     isFocused: false,
        // },
        // [SKYPE]: {
        //     name: SKYPE,
        //     component: <Icon name={SKYPE} />,
        //     isOpen: false,
        //     isFocused: false,
        // },
        {
            id: FILE_TYPE.BROWSER,
            icon: ICONS.BROWSER,
            name: WINDOW_META.BROWSER.title,
            type: FILE_TYPE.BROWSER,
            isOpen: false,
            isFocused: false,
        },
        // [STEAM]: {
        //     name: STEAM,
        //     component: <Icon name={STEAM} />,
        //     isOpen: false,
        //     isFocused: false,
        // },
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

        closeSpecificModal(
            state,
            action: PayloadAction<TaskBarModal>,
        ) {
            state.modalStack = state.modalStack.filter(
                m => m !== action.payload,
            );
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
    closeSpecificModal,
    openModal,
    changeApp,
} = taskBarSlice.actions;
