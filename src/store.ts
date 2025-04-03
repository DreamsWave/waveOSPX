import cameraReducer from "@/features/camera/slice";
import debugReducer from "@/features/debug/slice";
import modeReducer from "@/features/mode/slice";
import processReducer from "@/features/pc/process/slice";
import taskbarReducer from "@/features/pc/taskbar/slice";
import type { PCState } from "@/features/pc/types";
import phoneTextInputReducer from "@/features/phone/text-input/slice";
import type { PhoneState } from "@/features/phone/types";
import settingsReducer from "@/features/settings/slice";
import themeReducer from "@/features/theme/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const phoneReducer = combineReducers<PhoneState>({
  applications: (state = {}) => state,
  textInput: phoneTextInputReducer,
});

const pcReducer = combineReducers<PCState>({
  applications: (state = {}) => state,
  processes: processReducer,
  taskbar: taskbarReducer,
});

const rootReducer = combineReducers({
  debug: debugReducer,
  settings: settingsReducer,
  camera: cameraReducer,
  mode: modeReducer,
  theme: themeReducer,
  phone: phoneReducer,
  pc: pcReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
