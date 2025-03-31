import { getColor } from "@/styles/colorUtils";
import styled from "styled-components";

export const StyledDesktopWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const StyledDesktop = styled.ol`
  background-color: ${({ theme }) => theme.pc.desktop.background};
  background-image: ${({ theme }) =>
    `linear-gradient(${getColor("Slate", 6)} ${theme.s(
      1
    )}px, transparent ${theme.s(1)}px), linear-gradient(to right, ${getColor(
      "Slate",
      6
    )} ${theme.s(1)}px, transparent ${theme.s(1)}px)`};
  background-size: ${({ theme }) => `${theme.s(16)}px ${theme.s(16)}px`};

  height: ${({ theme }) =>
    `calc(100% - ${theme.s(theme.pc.taskbar.height)}px)`};
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.s(34)}px);
  grid-template-rows: repeat(auto-fill, ${({ theme }) => theme.s(34)}px);
  gap: ${({ theme }) =>
    `${theme.s(theme.pc.desktop.grid.gapY)}px ${theme.s(
      theme.pc.desktop.grid.gapX
    )}px`};
  padding: ${({ theme }) => theme.s(theme.pc.desktop.grid.padding)}px;
  place-content: flex-start;

  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledDesktopItem = styled.li`
  display: flex;
  height: min-content;
  outline-offset: ${({ theme }) => `${theme.s(-1)}px`};
  padding: ${({ theme }) => `${theme.s(1)}px`};
`;
