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
`;
