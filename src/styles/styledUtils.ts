import { type DefaultTheme, type RuleSet, css } from "styled-components";

export const getScreenMediaQuery = (): RuleSet => css`
  ${({ theme }) =>
    `@media (max-width: ${theme.pc.screen.resolution.width}px) or (max-height: ${theme.pc.screen.resolution.height}px)`}
`;

export const getFontSize = (
  type: keyof DefaultTheme["common"]["fontSizes"] = "base"
): RuleSet => css`
  ${({ theme }) => `${theme.common.fontSizes[type] * theme.common.pixelSize}px`}
`;

export const getBorderImage = (
  $texture: string,
  $patchMargin?: number
): RuleSet => css`
  border-style: solid;
  border-color: transparent;
  border-width: ${({ theme }) => theme.s($patchMargin ?? 0)}px;
  border-image: url("${$texture}") ${$patchMargin ?? 0} fill;
  background-clip: padding-box;
`;

// Function to encode hash symbols and newlines
export function encodeHash(str: string): string {
  return str
    .replace(/#/g, "%23")
    .replace(/\n/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Function to create properly encoded data URL
export function createInlineSVG(svg: string): string {
  const encodedSvg = encodeURIComponent(
    svg.replace(/\n/g, "").replace(/\s+/g, " ").trim()
  );
  return `url("data:image/svg+xml;utf8,${encodedSvg}")`;
}

// Main border SVG function
export const createBorderSvg = (color?: string) => {
  // Convert color to hex if it's not already in that format
  const fillColor = color
    ? color.startsWith("#")
      ? color
      : `#${color}`
    : "#222323";

  const svgContent = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" shape-rendering="crispEdges" stroke="none" preserveAspectRatio="xMidYMid slice" width="4" height="4" viewBox="0 0 4 4"><path id="00ff232322" fill="${fillColor}" d="M 1 0 L 2 0 L 2 1 L 1 1 Z M 2 0 L 3 0 L 3 1 L 2 1 Z M 0 1 L 1 1 L 1 2 L 0 2 Z M 3 1 L 4 1 L 4 2 L 3 2 Z M 0 2 L 1 2 L 1 3 L 0 3 Z M 3 2 L 4 2 L 4 3 L 3 3 Z M 1 3 L 2 3 L 2 4 L 1 4 Z M 2 3 L 3 3 L 3 4 L 2 4 Z"/></svg>`;

  return css`
    border-style: solid;
    border-color: transparent;
    border-width: ${({ theme }) => `${theme.s(1)}px`};
    border-image: ${createInlineSVG(svgContent)};
    border-image-slice: 1;
    border-image-width: ${({ theme }) => `${theme.s(1)}px`};
    background-clip: padding-box;
  `;
};
