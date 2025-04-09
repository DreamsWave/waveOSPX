import { STORAGE_REDUCED_MOTION_KEY } from "@/utils/constants";
import { createSlice } from "@reduxjs/toolkit";

const getInitialReducedMotion = (): boolean => {
  try {
    const stored = localStorage.getItem(STORAGE_REDUCED_MOTION_KEY);
    if (stored !== null) {
      return JSON.parse(stored);
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

export interface SettingsState {
  reducedMotion: boolean;
  visible: boolean;
}

const initialState: SettingsState = {
  reducedMotion: getInitialReducedMotion(),
  visible: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleReducedMotion: (state) => {
      state.reducedMotion = !state.reducedMotion;
      localStorage.setItem(
        STORAGE_REDUCED_MOTION_KEY,
        state.reducedMotion.toString()
      );
    },
    showSettings: (state) => {
      state.visible = true;
    },
    hideSettings: (state) => {
      state.visible = false;
    },
  },
});

export const { toggleReducedMotion, showSettings, hideSettings } =
  settingsSlice.actions;
export default settingsSlice.reducer;
