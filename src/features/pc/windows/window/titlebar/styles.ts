import { getBorderImage } from "@/styles/styledUtils";
import styled from "styled-components";

export const StyledTitlebarContainer = styled.header<{
  $isMaximized?: boolean;
  $isFocused: boolean;
}>`
  height: ${({ theme }) => `${theme.s(theme.pc.window.titleBar.height)}px`};
  width: 100%;
  background-color: ${({ theme }) => theme.pc.window.titleBar.background};
  display: flex;
  cursor: ${({ $isMaximized = false }) => ($isMaximized ? "default" : "move")};
  position: relative;
  z-index: 1;
  pointer-events: auto;
  border-bottom: ${({ theme, $isFocused }) =>
    $isFocused
      ? theme.getBorder(1, theme.pc.window.outline)
      : theme.getBorder(1, theme.pc.window.outlineFocused)};

  > * {
    pointer-events: none;
  }
`;

export const StyledTitlebar = styled.div<{ $isFocused: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => `${theme.s(1)}px`};
  margin: ${({ theme }) => `${theme.s(1)}px`};
  margin-right: 0;
  padding-left: ${({ theme }) => `${theme.s(1)}px`};
  width: 100%;
  background-color: ${({ theme, $isFocused }) =>
    $isFocused
      ? theme.pc.window.titleBar.backgroundAccent
      : theme.pc.window.titleBar.backgroundUnfocused};
`;

export const StyledTitle = styled.span`
  flex-grow: 1;
  text-align: left;
  padding-top: ${({ theme }) => `${theme.s(1)}px`};
  padding-left: ${({ theme }) => `${theme.s(2)}px`};
  color: ${({ theme }) => theme.pc.window.titleBar.text || "#000"};
  font-size: ${({ theme }) => `${theme.s(6)}px`};
  cursor: move;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => `${theme.s(1)}px`};
  margin: ${({ theme }) => `${theme.s(1)}px`};
  background: ${({ theme }) => theme.pc.window.titleBar.background};
`;

export const StyledButton = styled.button<{
  $borderTexture?: string;
  $patchMargin?: number;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => `${theme.s(9)}px`};
  height: ${({ theme }) => `${theme.s(9)}px`};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.pc.window.titleBar.text || "#fff"};
  z-index: 2;
  position: relative;
  pointer-events: auto;

  ${({ $borderTexture, $patchMargin }) =>
    $borderTexture && getBorderImage($borderTexture, $patchMargin)}

  &:hover {
    background-color: ${({ theme }) =>
      theme.pc.window.titleBar.background || "#ddd"};
  }

  @media (max-width: 768px) {
    width: ${({ theme }) => `${theme.s(9)}px`};
    height: ${({ theme }) => `${theme.s(9)}px`};
    margin-left: ${({ theme }) => `${theme.s(3)}px`};
    background-color: rgba(0, 0, 0, 0.1);
    touch-action: manipulation;
  }
`;
