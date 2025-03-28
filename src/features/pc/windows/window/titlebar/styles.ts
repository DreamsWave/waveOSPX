import styled from "styled-components";

export const StyledTitlebar = styled.header<{
  $isFocused: boolean;
  $isMaximized?: boolean;
}>`
  height: ${({ theme }) => `${theme.s(11)}px`};
  width: 100%;
  background-color: ${({ theme, $isFocused }) =>
    $isFocused
      ? theme.pc.window.titleBar.backgroundFocused
      : theme.pc.window.titleBar.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => `${theme.s(2)}px`};
  cursor: ${({ $isMaximized = false }) => ($isMaximized ? "default" : "move")};
  position: relative;
  z-index: 1;
  pointer-events: auto;

  > * {
    pointer-events: none;
  }
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

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => `${theme.s(7)}px`};
  height: ${({ theme }) => `${theme.s(7)}px`};
  margin-left: ${({ theme }) => `${theme.s(2)}px`};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.pc.window.titleBar.text || "#fff"};
  z-index: 2;
  position: relative;
  pointer-events: auto;

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
