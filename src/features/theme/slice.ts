import themes, { type ThemeName } from "@/styles/themes";
import { DEFAULT_THEME, STORAGE_THEME_KEY } from "@/utils/constants";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

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

export interface ThemeState {
  currentTheme: ThemeName;
}

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
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

export const { setTheme, switchToNextTheme } = themeSlice.actions;
export default themeSlice.reducer;
