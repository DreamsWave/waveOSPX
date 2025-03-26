import baseTheme from "@/styles/baseTheme";
import type { DefaultTheme } from "styled-components";

const colors = {
  background: "#f5f7fa",
  text: "#48474d",
};

const formats = {};

const sizes = {};

const lightTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...colors,
  },
  formats: {
    ...baseTheme.formats,
    ...formats,
  },
  sizes: {
    ...baseTheme.sizes,
    ...sizes,
  },
  name: "Light",
};

export default lightTheme;
