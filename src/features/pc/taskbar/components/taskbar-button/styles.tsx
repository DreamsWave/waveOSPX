import ElevatedRoundedTextureSVG from "@/assets/textures/pc/elevated-rounded.svg";
import { getBorderImage } from "@/styles/styledUtils";
import styled from "styled-components";

export const StyledTaskbarButton = styled.button<{
  $isActive?: boolean;
}>`
  font-family: ${({ theme }) => theme.formats.systemFont};
  font-size: ${({ theme }) => `${theme.s(5)}px`};
  cursor: pointer;
  background: ${({ theme, $isActive }) =>
    $isActive
      ? theme.pc.taskbar.processButton.backgroundActive
      : theme.pc.taskbar.processButton.background};
  color: ${({ theme }) => theme.pc.taskbar.text};
  overflow: hidden;
  border-bottom: ${({ $isActive, theme }) =>
    theme.getBorder(
      1,
      $isActive
        ? theme.pc.taskbar.processButton.borderActive
        : theme.pc.taskbar.processButton.border
    )};
`;

export const StyledTaskbarButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) =>
    `${theme.s(1)}px ${theme.s(4)}px ${theme.s(1)}px ${theme.s(1)}px`};
  max-width: ${({ theme }) => `${theme.s(60)}px`};
  gap: ${({ theme }) => `${theme.s(2)}px`};
  overflow: hidden;
  flex-wrap: nowrap;
`;

export const StyledTaskbarButtonTitle = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: ${({ theme }) => `${theme.s(1)}px`};
`;

export const StyledStartMenuButton = styled(StyledTaskbarButton)`
  background: ${({ theme }) => theme.pc.taskbar.startMenuButton.background};
  color: ${({ theme }) => theme.pc.taskbar.startMenuButton.text};
  padding: ${({ theme }) => `${theme.s(1)}px`};
  overflow: visible;
  ${getBorderImage(ElevatedRoundedTextureSVG, 1)}
`;
