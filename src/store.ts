import cameraReducer from "@/features/camera/cameraSlice";
import debugReducer from "@/features/debug/debugSlice";
import modeReducer from "@/features/mode/modeSlice";
import processReducer from "@/features/pc/process/processSlice";
import settingsReducer from "@/features/settings/settingsSlice";
import themeReducer from "@/features/theme/themeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    debug: debugReducer,
    settings: settingsReducer,
    camera: cameraReducer,
    mode: modeReducer,
    theme: themeReducer,
    processes: processReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
