import baseTheme from "@/styles/baseTheme";
import type { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  ...baseTheme,
  name: "Light",

  // Override common settings
  common: {
    ...baseTheme.common,
    // background: getColor("Slate", 7), // Light background
    // text: getColor("Slate", 1), // Dark text
  },

  // Override PC components
  pc: {
    ...baseTheme.pc,
    desktop: {
      ...baseTheme.pc.desktop,
      // background: getColor("SoftBlue", 5),
    },
    taskbar: {
      ...baseTheme.pc.taskbar,
      // background: getColor("SoftBlue", 6),
    },
    window: {
      ...baseTheme.pc.window,
      // background: getColor("SoftBlue", 6),
    },
  },

  // Include other required properties to satisfy DefaultTheme
  phone: baseTheme.phone,
  apps: baseTheme.apps,
  debug: baseTheme.debug,
  formats: baseTheme.formats,
  s: baseTheme.s,
  getBorder: baseTheme.getBorder,
  getFontSize: baseTheme.getFontSize,
};

export default lightTheme;
