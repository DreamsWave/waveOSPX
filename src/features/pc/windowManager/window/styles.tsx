import styled from "styled-components";

export const StyledWindow = styled.div<{
  $isFocused: boolean;
  $isMinimized: boolean;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.pc.window.background};
  border: ${({ theme }) => theme.sizes.pixelSize}px solid
    ${({ $isFocused, theme }) =>
      $isFocused
        ? theme.colors.pc.window.outline
        : theme.colors.pc.window.outlineFocused};
  display: ${({ $isMinimized }) => ($isMinimized ? "none" : "block")};
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const StyledWindowContent = styled.div`
  height: calc(
    100% -
      ${({ theme }) =>
        theme.sizes.pc.window.titleBar.heightPX * theme.sizes.pixelSize}px
  );
  overflow: auto;
`;
