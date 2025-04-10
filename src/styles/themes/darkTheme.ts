import baseTheme from "@/styles/baseTheme";
import { getColor } from "@/styles/colorUtils";
import type { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  ...baseTheme,
  name: "Dark",

  // Override common settings
  common: {
    ...baseTheme.common,
    background: {
      ...baseTheme.common.background,
      primary: getColor("Slate", 2),
      secondary: getColor("Slate", 1),
      accent: getColor("Blue", 4),
      muted: getColor("Slate", 4),
    },
    text: {
      ...baseTheme.common.text,
      primary: getColor("Slate", 7),
      secondary: getColor("Slate", 6),
      accent: getColor("Blue", 7),
      muted: getColor("Slate", 4),
      link: getColor("SoftBlue", 6),
    },
    border: {
      ...baseTheme.common.border,
      color: getColor("Slate", 7),
    },
    select: {
      ...baseTheme.common.select,
      background: {
        ...baseTheme.common.select.background,
        default: getColor("Slate", 2),
        disabled: getColor("Slate", 6),
      },
      text: {
        ...baseTheme.common.select.text,
        default: getColor("Slate", 7),
        disabled: getColor("Slate", 4),
      },
    },
    menuItem: {
      ...baseTheme.common.menuItem,
      background: {
        ...baseTheme.common.menuItem.background,
        default: getColor("Slate", 2),
        disabled: getColor("Slate", 6),
        hover: getColor("Gray", 2),
        active: getColor("Blue", 4),
      },
      text: {
        ...baseTheme.common.menuItem.text,
        default: getColor("Slate", 7),
        disabled: getColor("Slate", 4),
        hover: getColor("Slate", 7),
        active: getColor("Slate", 7),
      },
    },
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
  apps: baseTheme.apps,
  debug: baseTheme.debug,
  formats: baseTheme.formats,
  s: baseTheme.s,
  getBorder: baseTheme.getBorder,
  getFontSize: baseTheme.getFontSize,
};

export default darkTheme;
