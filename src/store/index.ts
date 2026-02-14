import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import desktopSlice from "./slices/desktop";
import systemSlice from "./slices/system";
import taskBarSlice from './slices/taskBar';

const rootReducer = combineReducers({
    taskBar: taskBarSlice,
    desktop: desktopSlice,
    system: systemSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
