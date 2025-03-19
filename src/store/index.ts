import { configureStore } from "@reduxjs/toolkit";
import cameraReducer from "./cameraSlice";
import debugReducer from "./debugSlice";
import settingsReducer from "./settingsSlice";

export const store = configureStore({
  reducer: {
    debug: debugReducer,
    settings: settingsReducer,
    camera: cameraReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
