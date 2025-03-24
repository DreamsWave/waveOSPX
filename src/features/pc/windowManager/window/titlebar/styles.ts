import { px } from "@/utils/functions";
import styled from "styled-components";

export const StyledTitlebar = styled.div<{
  $isFocused: boolean;
  $isMaximized?: boolean;
}>`
  height: ${px(11)};
  width: 100%;
  background-color: ${({ theme, $isFocused }) =>
    $isFocused
      ? theme.colors.pc.window.titleBar.backgroundFocused
      : theme.colors.pc.window.titleBar.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${px(2)};
  cursor: ${({ $isMaximized = false }) => ($isMaximized ? "default" : "move")};
`;

export const StyledTitle = styled.span`
  flex-grow: 1;
  text-align: left;
  padding-top: ${px(1)};
  padding-left: ${px(2)};
  color: ${({ theme }) => theme.colors.pc.window.titleBar.text || "#000"};
  font-size: ${px(6)};
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${px(7)};
  height: ${px(7)};
  margin-left: 5px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.pc.window.titleBar.text || "#fff"};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.pc.window.titleBar.background || "#ddd"};
  }
`;
