import ElevatedTextureSVG from "@/assets/textures/pc/elevated.svg";
import { createBorderSvg, getBorderImage } from "@/styles/styledUtils";
import styled from "styled-components";

export const StyledWindow = styled.section<{
  $isFocused: boolean;
  $isMinimized: boolean;
  $isMaximized: boolean;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.pc.window.background};
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  box-sizing: border-box;

  ${({ theme, $isFocused, $isMaximized }) =>
    $isMaximized
      ? "none"
      : $isFocused
      ? createBorderSvg(theme.pc.window.outline)
      : createBorderSvg(theme.pc.window.outlineFocused)};
`;

export const StyledWindowContent = styled.div`
  height: calc(
    100% - ${({ theme }) => `${theme.s(theme.pc.window.titleBar.height)}px`}
  );
  width: 100%;
  overflow: auto;

  ${getBorderImage(ElevatedTextureSVG, 1)};
`;
