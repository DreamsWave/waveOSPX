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
`;

export const StyledTitle = styled.span`
  flex-grow: 1;
  text-align: left;
  padding-top: ${({ theme }) => `${theme.s(1)}px`};
  padding-left: ${({ theme }) => `${theme.s(2)}px`};
  color: ${({ theme }) => theme.pc.window.titleBar.text || "#000"};
  font-size: ${({ theme }) => `${theme.s(6)}px`};
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

  &:hover {
    background-color: ${({ theme }) =>
      theme.pc.window.titleBar.background || "#ddd"};
  }
`;
