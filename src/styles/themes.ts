import darkTheme from "@/styles/themes/darkTheme";
import lightTheme from "@/styles/themes/lightTheme";
import type { DefaultTheme } from "styled-components";

const themes = { darkTheme, lightTheme };

export type ThemeName = keyof typeof themes;

export default themes as Record<ThemeName, DefaultTheme>;
