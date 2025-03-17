import baseTheme from "@/styles/baseTheme";
import colors from "@/styles/darkTheme/colors";
import formats from "@/styles/darkTheme/formats";
import sizes from "@/styles/darkTheme/sizes";
import { type DefaultTheme } from "styled-components";

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
