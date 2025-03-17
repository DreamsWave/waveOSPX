import "styled-components";

import type { baseColors, baseFormats, baseSizes } from "@/styles/baseTheme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof baseColors;
    formats: typeof baseFormats;
    name: string;
    sizes: typeof baseSizes;
  }
  export function useTheme(): DefaultTheme;
}
