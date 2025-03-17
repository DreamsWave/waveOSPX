export const baseColors = {
  background: "#ffffff",
  text: "#000000",
  gridLine: "#ff0000",
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
  gridLineWidth: 0.5,
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
