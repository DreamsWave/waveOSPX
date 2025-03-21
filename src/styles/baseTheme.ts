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
    desktop: {
      background: "#f0f0f0",
      text: "#000000",
    },
    window: {
      background: "#1a1e22",
      text: "#ebf0f6",
      titleBar: {
        background: "rgb(17, 21, 24)",
        backgroundHover: "#2c323a",
        text: "#ebf0f6",
      },
    },
  },
};

export const baseSizes = {
  pixelSize: 3,
  monitor: {
    screen: {
      resolution: { height: 770, width: 1020 },
      position: { xPX: 180, yPX: 65 },
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
