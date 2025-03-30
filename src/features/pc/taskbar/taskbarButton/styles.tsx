import TaskButtonActiveTextureSVG from "@/assets/textures/pc/button-active.svg";
import TaskButtonTextureSVG from "@/assets/textures/pc/button.svg";
import { getBorderImage } from "@/styles/styledUtils";
import styled from "styled-components";

export const StyledTaskbarButton = styled.button<{
  $isActive?: boolean;
}>`
  height: ${({ theme }) => `${theme.s(12)}px`};
  font-family: ${({ theme }) => theme.formats.systemFont};
  font-size: ${({ theme }) => `${theme.s(5)}px`};
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.pc.taskbar.text};
  overflow: hidden;
  ${({ $isActive }) =>
    getBorderImage(
      $isActive ? TaskButtonActiveTextureSVG : TaskButtonTextureSVG,
      1
    )}
`;

export const StyledTaskbarButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) =>
    `${theme.s(1)}px ${theme.s(3)}px ${theme.s(1)}px ${theme.s(1)}px`};
  /* min-width: ${({ theme }) => `${theme.s(30)}px`}; */
  max-width: ${({ theme }) => `${theme.s(60)}px`};
  gap: ${({ theme }) => `${theme.s(2)}px`};
  overflow: hidden;
  flex-wrap: nowrap;
`;

export const StyledTaskbarButtonTitle = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: ${({ theme }) => `${theme.s(1)}px`};
`;

export const StyledStartMenuButton = styled(StyledTaskbarButton)`
  background: ${({ theme }) => theme.pc.taskbar.startMenuButton.background};
  color: ${({ theme }) => theme.pc.taskbar.startMenuButton.text};
  padding: ${({ theme }) => `${theme.s(1)}px`};
  overflow: visible;
`;
