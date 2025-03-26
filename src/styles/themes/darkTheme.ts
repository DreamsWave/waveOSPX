import baseTheme from "@/styles/baseTheme";
import type { DefaultTheme } from "styled-components";

const colors = {
  background: "#2d3136",
  text: "#ebf0f6",
};

const formats = {};

const sizes = {};

const darkTheme: DefaultTheme = {
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
  name: "Dark",
};

export default darkTheme;
