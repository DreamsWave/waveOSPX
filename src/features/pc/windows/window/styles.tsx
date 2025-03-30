import styled from "styled-components";

export const StyledWindow = styled.section<{
  $isFocused: boolean;
  $isMinimized: boolean;
  $isMaximized: boolean;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.pc.window.background};
  border: ${({ theme, $isFocused, $isMaximized }) =>
    $isMaximized
      ? "none"
      : $isFocused
      ? theme.getBorder(1, theme.pc.window.outline)
      : theme.getBorder(1, theme.pc.window.outlineFocused)};
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  box-sizing: border-box;

  &.window {
    // This class is used for click detection
  }
`;

export const StyledWindowContent = styled.div`
  height: calc(
    100% - ${({ theme }) => `${theme.s(theme.pc.window.titleBar.height)}px`}
  );
  width: 100%;
  overflow: auto;
`;
