import { getScreenMediaQuery } from "@/styles/styledUtils";
import styled from "styled-components";

export const StyledPC = styled.main<{ $isFocused: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.s(theme.pc.screen.position.y)}px;
  left: ${({ theme }) => theme.s(theme.pc.screen.position.x)}px;
  background: ${({ theme }) => theme.common.background.primary};
  color: ${({ theme }) => theme.common.text.primary};
  width: ${({ theme }) => theme.pc.screen.resolution.width}px;
  height: ${({ theme }) => theme.pc.screen.resolution.height}px;
  transition: filter 0.5s ease, scale 0.5s ease-in-out;
  filter: blur(${({ $isFocused }) => ($isFocused ? 0 : "1px")});
  scale: ${({ $isFocused }) => ($isFocused ? 1 : 0.95)};
  overflow: hidden;

  ${getScreenMediaQuery()} {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    top: 0;
    left: 0;
    scale: 1;
    position: fixed;
  }
`;

export const StyledDesktopView = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.s(theme.pc.taskbar.height)}px;
`;
