import { px } from "@/utils/functions";
import styled from "styled-components";

export const StyledDesktopWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const StyledDesktop = styled.ol`
  background: ${({ theme }) => theme.colors.pc.desktop.background};
  height: ${({ theme }) =>
    `calc(100% - ${
      theme.sizes.pc.taskbar.heightPX * theme.sizes.pixelSize
    }px)`};
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${px(34)});
  grid-template-rows: repeat(auto-fill, ${px(34)});
  gap: ${({ theme }) =>
    `${theme.sizes.pc.desktop.grid.gapYPX * theme.sizes.pixelSize}px ${
      theme.sizes.pc.desktop.grid.gapXPX * theme.sizes.pixelSize
    }px`};
  padding: ${({ theme }) => px(theme.sizes.pc.desktop.grid.paddingPX)};
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
  outline-offset: ${px(-1)};
  padding: ${px(1)};
`;
