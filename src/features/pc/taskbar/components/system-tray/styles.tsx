import LoweredTextureSVG from "@/assets/textures/pc/lowered.svg";
import { getBorderImage } from "@/styles/styledUtils";
import styled from "styled-components";

export const StyledSystemTray = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: ${({ theme }) => `${theme.s(2)}px`};
  min-width: ${({ theme }) => `${theme.s(31)}px`};
  padding: ${({ theme }) => `${theme.s(1)}px`};
  ${getBorderImage(LoweredTextureSVG, 1)}
`;

export const StyledTime = styled.span`
  font-size: ${({ theme }) => theme.s(5)}px;
  color: ${({ theme }) => theme.pc.taskbar.time.color};
  font-family: ${({ theme }) => theme.formats.systemFont};
  white-space: nowrap;
  padding-top: ${({ theme }) => `${theme.s(1)}px`};
`;
