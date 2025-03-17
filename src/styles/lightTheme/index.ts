import baseTheme from "@/styles/baseTheme";
import colors from "@/styles/lightTheme/colors";
import formats from "@/styles/lightTheme/formats";
import sizes from "@/styles/lightTheme/sizes";
import { type DefaultTheme } from "styled-components";

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
