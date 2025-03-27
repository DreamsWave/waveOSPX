import styled from "styled-components";

export const StyledWindow = styled.section<{
  $isFocused: boolean;
  $isMinimized: boolean;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.pc.window.background};
  border: ${({ theme, $isFocused }) =>
    `${theme.s(1)}px solid ${
      $isFocused
        ? theme.colors.pc.window.outline
        : theme.colors.pc.window.outlineFocused
    }`};
  overflow: hidden;
  width: 100%;
  height: 100%;
  &.window {
    // This class is used for click detection
  }
`;

export const StyledWindowContent = styled.div`
  height: calc(
    100% -
      ${({ theme }) => `${theme.s(theme.sizes.pc.window.titleBar.heightPX)}px`}
  );
  width: 100%;
  overflow: auto;
`;
