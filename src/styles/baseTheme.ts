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
        border: {
          default: getColor("Slate", 4),
          hover: getColor("Slate", 7),
          active: getColor("Blue", 4),
        },
        background: {
          default: "transparent",
          hover: getColor("Slate", 7),
          active: getColor("Gray", 7),
        },
      },
      height: 12,
      borderWidth: 1,
      startMenuButton: {
        background: {
          default: getColor("Gray", 7),
          hover: getColor("Slate", 7),
        },
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
        background: {
          default: getColor("Gray", 6),
          accent: getColor("Blue", 4),
          unfocused: getColor("Slate", 4),
        },
        text: getColor("Slate", 7),
        button: {
          background: {
            default: getColor("Gray", 6),
            hover: getColor("Gray", 7),
          },
          text: getColor("Slate", 7),
        },
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
    text: getColor("SoftBlue", 2),
    border: getColor("Slate", 2),
    displayControls: {
      background: getColor("Blue", 4),
      text: getColor("Slate", 7),
    },
    cursorColor: getColor("Blue", 4),
  },

  apps: {
    pc: {},
    phone: {},
  },

  // Common utilities and design tokens
  common: {
    // Base colors for general use
    background: {
      primary: getColor("Slate", 7),
      secondary: getColor("SoftBlue", 4),
      accent: getColor("Blue", 4),
      muted: getColor("Slate", 4),
      white: getColor("Slate", 7),
      black: getColor("Slate", 0),
    },
    text: {
      primary: getColor("Slate", 2),
      secondary: getColor("SoftBlue", 4),
      accent: getColor("Blue", 4),
      muted: getColor("Slate", 4),
      white: getColor("Slate", 7),
      black: getColor("Slate", 0),
    },
    link: {
      color: getColor("Blue", 4),
      hover: getColor("Blue", 2),
    },
    border: {
      color: getColor("Slate", 2),
      colorFocused: getColor("SoftBlue", 4),
      width: 1,
    },
    scrollbar: {
      background: getColor("Gray", 6),
      hover: getColor("Gray", 7),
      active: getColor("Gray", 8),
      disabled: getColor("Gray", 5),
      secondaryBackground: getColor("Gray", 3),
    },

    infoDisplay: {
      background: getColor("Gray", 7),
      margin: 2,
      padding: 3,
    },

    checkbox: {
      size: 10,
      background: {
        default: getColor("Gray", 7),
        checked: getColor("Blue", 4),
        disabled: getColor("Gray", 6),
      },
      color: {
        default: getColor("Slate", 3),
        checked: getColor("Slate", 7),
        disabled: getColor("Slate", 4),
      },
    },

    select: {
      background: {
        default: getColor("Gray", 7),
        disabled: getColor("Gray", 6),
      },
      text: {
        default: getColor("Slate", 3),
        disabled: getColor("Slate", 4),
      },
      border: getColor("Slate", 2),
      borderFocused: getColor("SoftBlue", 4),
    },

    menuItem: {
      background: {
        default: getColor("Gray", 7),
        disabled: getColor("Gray", 6),
        hover: getColor("Gray", 8),
        active: getColor("Blue", 4),
      },
      text: {
        default: getColor("Slate", 3),
        disabled: getColor("Slate", 4),
        hover: getColor("Slate", 7),
        active: getColor("Slate", 7),
      },
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
  getBorder: function (
    this: DefaultTheme,
    width?: number,
    color?: string
  ): string {
    const borderWidth = width ?? this.common.border.width;
    const borderColor = color ?? this.common.border.color;
    return `${this.s(borderWidth)}px solid ${borderColor}`;
  },
  getFontSize: (type: keyof DefaultTheme["common"]["fontSizes"] = "base") =>
    `${baseTheme.common.fontSizes[type] * baseTheme.common.pixelSize}px`,
};

export default baseTheme;
