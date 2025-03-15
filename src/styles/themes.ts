import defaultTheme from "@/styles/defaultTheme";
import { type DefaultTheme } from "styled-components";

const themes = { defaultTheme };

export type ThemeName = keyof typeof themes;

export default themes as Record<ThemeName, DefaultTheme>;
