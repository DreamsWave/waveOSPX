import type { ThemeName } from "@/styles/themes";

export const APP_NAME = "waveOSPX";
export const APP_DESCRIPTION =
  "A retro-styled web application that simulates multiple device interfaces including a phone and PC environment.";

export const DEFAULT_THEME: ThemeName = "darkTheme";
export const THEMES = {
  DARK: "darkTheme" as ThemeName,
  LIGHT: "lightTheme" as ThemeName,
};

export const STORAGE_THEME_KEY = "theme";
export const STORAGE_REDUCED_MOTION_KEY = "reduced-motion";
export const STORAGE_CAMERA_FOCUSED_KEY = "camera-focused";
