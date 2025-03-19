import themes, { ThemeName } from "@/styles/themes";
import {
  DEFAULT_THEME,
  STORAGE_REDUCED_MOTION_KEY,
  STORAGE_THEME_KEY,
} from "@/utils/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const getInitialTheme = (): ThemeName => {
  try {
    const stored = localStorage.getItem(STORAGE_THEME_KEY) as ThemeName;
    return stored && Object.keys(themes).includes(stored)
      ? stored
      : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

interface SettingsState {
  reducedMotion: boolean;
  theme: ThemeName;
}

const initialState: SettingsState = {
  reducedMotion: getInitialReducedMotion(),
  theme: getInitialTheme(),
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
    setTheme: (state, action: PayloadAction<ThemeName>) => {
      state.theme = action.payload;
      localStorage.setItem(STORAGE_THEME_KEY, action.payload);
    },
  },
});

export const { toggleReducedMotion, setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
