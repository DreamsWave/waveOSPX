import baseTheme from "@/styles/baseTheme";
import type { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  ...baseTheme,
  name: "Dark",

  // Override common settings
  common: {
    ...baseTheme.common,
    // background: getColor("Slate", 1), // Dark background
    // text: getColor("Slate", 7), // Light text
  },

  // Override PC components
  pc: {
    ...baseTheme.pc,
    desktop: {
      ...baseTheme.pc.desktop,
      // background: getColor("SoftBlue", 1),
      // text: getColor("SoftBlue", 6),
      shortcut: {
        ...baseTheme.pc.desktop.shortcut,
        // text: getColor("SoftBlue", 6),
      },
    },
    taskbar: {
      ...baseTheme.pc.taskbar,
      // background: getColor("Slate", 2),
      // text: getColor("SoftBlue", 6),
      // separator: getColor("Slate", 4),
    },
    window: {
      ...baseTheme.pc.window,
      // background: getColor("Slate", 2),
      // text: getColor("SoftBlue", 6),
    },
  },

  // Include other required properties to satisfy DefaultTheme
  phone: baseTheme.phone,
  debug: baseTheme.debug,
  formats: baseTheme.formats,
  s: baseTheme.s,
  getBorder: baseTheme.getBorder,
};

export default darkTheme;
