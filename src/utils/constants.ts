import type { ThemeName } from "@/styles/themes";

export const DEFAULT_THEME: ThemeName = "darkTheme";
export const THEMES = {
  DARK: "darkTheme" as ThemeName,
  LIGHT: "lightTheme" as ThemeName,
};

export const STORAGE_THEME_KEY = "theme";
export const STORAGE_REDUCED_MOTION_KEY = "reduced-motion";
export const STORAGE_CAMERA_FOCUSED_KEY = "camera-focused";
