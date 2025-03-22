import { css, DefaultTheme, RuleSet } from "styled-components";

/**
 * Converts a size to pixels using theme's pixelSize or returns the size as-is if a string.
 * @param size - Number of pixel units
 */
export const px = (size: number = 1): RuleSet => css`
  ${({ theme }) => `${theme.sizes.pixelSize * size}px`}
`;

export const getScreenMediaQuery = (): RuleSet => css`
  ${({ theme }) =>
    `@media (max-width: ${theme.sizes.monitor.screen.resolution.width}px) or (max-height: ${theme.sizes.monitor.screen.resolution.height}px)`}
`;

export const getFontSize = (
  type: keyof DefaultTheme["sizes"]["fontSizes"] = "base"
): RuleSet => css`
  ${({ theme }) => `${theme.sizes.fontSizes[type] * theme.sizes.pixelSize}px`}
`;
