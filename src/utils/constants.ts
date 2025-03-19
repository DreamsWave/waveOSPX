import { type ThemeName } from "@/styles/themes";

export const DEFAULT_THEME: ThemeName = "darkTheme";
export const THEMES = {
  DARK: "darkTheme" as ThemeName,
  LIGHT: "lightTheme" as ThemeName,
};

export const BACKGROUND_SCROLL_SPEED_X = -5;
export const BACKGROUND_SCROLL_SPEED_Y = -5;
export const THROTTLE_DELAY_MS = 16; // ~60 FPS

export const STORAGE_THEME_KEY = "theme";
export const STORAGE_REDUCED_MOTION_KEY = "reduced-motion";
export const STORAGE_CAMERA_FOCUSED_KEY = "camera-focused";
