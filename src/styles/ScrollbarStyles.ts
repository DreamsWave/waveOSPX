import { getBorderImage } from "@/styles/styledUtils";
import { css } from "styled-components";

import ScrollbarCornerTextureSVG from "@/assets/icons/single/pc/scrollbar-corner.svg";
import ScrollbarDownPointingTextureSVG from "@/assets/icons/single/pc/scrollbar-down-pointing.svg";
import ScrollbarLeftPointingTextureSVG from "@/assets/icons/single/pc/scrollbar-left-pointing.svg";
import ScrollbarRightPointingTextureSVG from "@/assets/icons/single/pc/scrollbar-right-pointing.svg";
import ScrollbarUpPointingTextureSVG from "@/assets/icons/single/pc/scrollbar-up-pointing.svg";

// Scrollbar textures
import ElevatedTextureSVG from "@/assets/textures/pc/elevated.svg";
// import LoweredTextureSVG from "@/assets/textures/pc/lowered.svg";
import ScrollbarTrackHorizontalTextureSVG from "@/assets/textures/pc/scrollbar-track-horizontal.svg";
import ScrollbarTrackVerticalTextureSVG from "@/assets/textures/pc/scrollbar-track-vertical.svg";

const getIcon = (texture: string, width?: number, height?: number) => {
  const iconUrl = `url("${texture}")`;
  return css`
    background-image: ${iconUrl};
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${({ theme }) =>
      `${theme.s(height ?? 3)}px ${theme.s(width ?? 3)}px`};
  `;
};

export const customScrollbarStyles = css`
  /* Width and height of the scrollbar */
  ::-webkit-scrollbar {
    width: ${({ theme }) => `${theme.s(7)}px`};
    height: ${({ theme }) => `${theme.s(7)}px`};
  }

  /* Track/background of the scrollbar */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.common.scrollbar.background};
    ${getBorderImage(ScrollbarTrackVerticalTextureSVG, 1)}
  }

  ::-webkit-scrollbar-track:disabled {
    background: ${({ theme }) => theme.common.scrollbar.disabled};
  }

  /* Horizontal scrollbar track */
  ::-webkit-scrollbar-track:horizontal {
    ${getBorderImage(ScrollbarTrackHorizontalTextureSVG, 1)}
  }

  /* Handle/thumb of the scrollbar */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.common.scrollbar.background};
    ${getBorderImage(ElevatedTextureSVG, 1)}
  }

  /* Handle/thumb on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.common.scrollbar.hover};
  }

  /* Button arrows at the ends of the scrollbar */
  ::-webkit-scrollbar-button:single-button {
    background: ${({ theme }) => theme.common.scrollbar.background};
    height: ${({ theme }) => `${theme.s(7)}px`};
    width: ${({ theme }) => `${theme.s(7)}px`};
    ${getBorderImage(ElevatedTextureSVG, 1)}
    background-size: ${({ theme }) => `${theme.s(3)}px ${theme.s(3)}px`};
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    ${getIcon(ScrollbarUpPointingTextureSVG)};
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    ${getIcon(ScrollbarDownPointingTextureSVG)};
  }

  ::-webkit-scrollbar-button:single-button:horizontal:decrement {
    ${getIcon(ScrollbarLeftPointingTextureSVG)};
  }

  ::-webkit-scrollbar-button:single-button:horizontal:increment {
    ${getIcon(ScrollbarRightPointingTextureSVG)};
  }

  ::-webkit-scrollbar-button:single-button:hover {
    background: ${({ theme }) => theme.common.scrollbar.hover};
  }

  ::-webkit-scrollbar-button:single-button:disabled {
    background: ${({ theme }) => theme.common.scrollbar.disabled};
  }

  /* Corner where horizontal and vertical scrollba
rs meet */
  ::-webkit-scrollbar-corner {
    ${getIcon(ScrollbarCornerTextureSVG, 4, 5)}
  }
`;
