import themes, { ThemeName } from "@/styles/themes";
import { DEFAULT_THEME, STORAGE_THEME_KEY } from "@/utils/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  currentTheme: ThemeName;
}

const initialState: SettingsState = {
  currentTheme: getInitialTheme(),
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeName>) => {
      state.currentTheme = action.payload;
      localStorage.setItem(STORAGE_THEME_KEY, action.payload);
    },
    switchToNextTheme: (state) => {
      const themeNames = Object.keys(themes);
      const currentThemeIndex = themeNames.indexOf(state.currentTheme);
      const nextThemeIndex = (currentThemeIndex + 1) % themeNames.length;
      const nextTheme = themeNames[nextThemeIndex] as ThemeName;
      state.currentTheme = nextTheme;
      localStorage.setItem(STORAGE_THEME_KEY, nextTheme);
    },
  },
});

export const { setTheme, switchToNextTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
