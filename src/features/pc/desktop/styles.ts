import { px } from "@/utils/functions";
import styled from "styled-components";

export const StyledDesktop = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.pc.desktop.background};
`;

export const StyledDesktopWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const StyledShortcutsGrid = styled.ol`
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

export const StyledShortcutsGridItem = styled.li`
  display: flex;
  height: min-content;
  outline-offset: ${px(-1)};
  padding: ${px(1)};

  /* background: rgba(0, 0, 0, 0.1); // temp */
`;
