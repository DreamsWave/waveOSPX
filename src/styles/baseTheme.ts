import type { DefaultTheme } from "styled-components";
import { getColor } from "./colorUtils";

const baseTheme: Omit<DefaultTheme, "name"> = {
  pc: {
    screen: {
      resolution: { height: 768, width: 1020 },
      position: { x: 180, y: 65 },
    },
    desktop: {
      background: getColor("Gray", 6),
      text: getColor("SoftBlue", 1),
      shortcut: {
        text: {
          light: getColor("Slate", 7),
          dark: getColor("Slate", 2),
        },
        textShadow: {
          light: getColor("Slate", 7),
          dark: getColor("Slate", 2),
        },
        iconSize: 32,
        fontSize: 5,
      },
      grid: {
        gapX: 2,
        gapY: 11,
        padding: 4,
      },
    },
    taskbar: {
      background: getColor("Gray", 6),
      text: getColor("SoftBlue", 2),
      processButton: {
        border: getColor("Slate", 4),
        borderActive: getColor("Blue", 4),
        background: "transparent",
        backgroundActive: getColor("Gray", 7),
      },
      height: 12,
      borderWidth: 1,
      startMenuButton: {
        background: getColor("Gray", 7),
        text: getColor("Slate", 7),
      },
      time: {
        color: getColor("SoftBlue", 2),
      },
    },
    window: {
      background: getColor("Gray", 6),
      text: getColor("SoftBlue", 2),
      outline: getColor("Slate", 2),
      outlineFocused: getColor("Slate", 3),
      titleBar: {
        height: 12,
        background: getColor("Gray", 6),
        backgroundAccent: getColor("Blue", 4),
        backgroundUnfocused: getColor("Slate", 4),
        text: getColor("Slate", 7),
      },
    },
    startMenu: {
      background: getColor("Gray", 6),
      borderColor: getColor("Slate", 2),
      borderWidth: 1,
      text: getColor("Slate", 7),
    },
  },
  phone: {
    background: getColor("Slate", 7),
    text: getColor("SoftBlue", 1),
    border: getColor("Slate", 2),
    displayControls: {
      background: getColor("SoftBlue", 4),
      text: getColor("Slate", 7),
    },
  },

  // Common utilities and design tokens
  common: {
    // Base colors for general use
    background: getColor("Slate", 7),
    text: getColor("Slate", 2),
    border: {
      color: getColor("Slate", 2),
      colorFocused: getColor("SoftBlue", 4),
      width: 1,
    },

    // System settings
    pixelSize: 3,
    fontSizes: {
      xs: 4,
      sm: 5,
      base: 6,
      lg: 7,
      xl: 8,
    },
    iconSizes: {
      xs: 8,
      sm: 16,
      md: 32,
      lg: 64,
    },
    backgroundImageSize: { width: 2100, height: 1158 },
    zIndex: { highest: 9999, top: 1000, middle: 500 },
  },

  // Debug settings
  debug: {
    background: "rgba(0, 0, 0, 0.2)",
    backgroundHover: "rgba(0, 0, 0, 0.3)",
    text: "#fff",
    pixelGridLineColor: "#ff0000",
    pixelGridLineWidth: 0.5,
    buttonSize: 15,
    menuWidth: 150,
  },

  // Formatting options
  formats: {
    dateModified: {
      hour: "numeric",
      hour12: false,
      minute: "2-digit",
    } as Intl.DateTimeFormatOptions,
    systemFont:
      "'Monocraft', 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', sans-serif",
  },

  // Utility function for scaling pixel values
  s: (size: number) => baseTheme.common.pixelSize * size,
  getBorder: (
    width: number = baseTheme.common.border.width,
    color: string = baseTheme.common.border.color
  ) => `${baseTheme.s(width)}px solid ${color}`,
};

export default baseTheme;
