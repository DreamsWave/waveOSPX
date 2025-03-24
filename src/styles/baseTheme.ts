export const baseColors = {
  background: "#ffffff",
  text: "#000000",
  debug: {
    background: "rgba(0, 0, 0, 0.2)",
    backgroundHover: "rgba(0, 0, 0, 0.3)",
    text: "#fff",
    pixelGridLineColor: "#ff0000",
  },
  pc: {
    border: "#434549",
    desktop: {
      background: "#abaebe",
      text: "#3a4568",
      shortcut: {
        text: "#3a4568",
      },
    },
    taskbar: {
      background: "#bac7db",
      text: "#615f84",
    },

    window: {
      background: "#bac7db",
      text: "#615f84",
      titleBar: {
        background: "#8690b2",
        backgroundHover: "#2c323a",
        text: "#f5f7fa",
      },
    },
  },
  phone: {
    background: "#abaebe",
    text: "#3a4568",
    border: "#434549",
  },
};

export const baseSizes = {
  pixelSize: 3,
  fontSizes: {
    xs: 4,
    sm: 5,
    base: 6,
    lg: 7,
    xl: 8,
  },
  monitor: {
    screen: {
      resolution: { height: 768, width: 1020 },
      position: { xPX: 180, yPX: 65 },
    },
  },
  pc: {
    desktop: {
      grid: {
        gapXPX: 2,
        gapYPX: 11,
        paddingPX: 4,
      },
      shortcut: {
        iconSizePX: 32,
        fontSize: "14px",
      },
    },
    taskbar: {
      heightPX: 17,
      borderWidthPX: 1,
    },
  },
  backgroundImageSize: { width: 2100, height: 1158 },
  zIndex: { top: 1000, middle: 500 },
  debug: {
    pixelGridLineWidth: 0.5,
    buttonSize: 15,
    menuWidth: 150,
  },
};

export const baseFormats = {
  dateModified: {
    hour: "numeric",
    hour12: false,
    minute: "2-digit",
  } as Intl.DateTimeFormatOptions,
  systemFont:
    "'Monocraft', 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', sans-serif",
};

const baseTheme = {
  colors: baseColors,
  sizes: baseSizes,
  formats: baseFormats,
};

export default baseTheme;
