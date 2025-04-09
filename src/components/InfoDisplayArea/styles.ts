import LoweredTextureSVG from "@/assets/textures/pc/lowered.svg";
import { getBorderImage } from "@/styles/styledUtils";
import styled from "styled-components";

export const StyledInfoDisplay = styled.div`
  background: ${({ theme }) => theme.common.infoDisplay.background};
  margin: ${({ theme }) => `${theme.s(theme.common.infoDisplay.margin)}px`};
  height: ${({ theme }) =>
    `calc(100% - ${theme.s(theme.common.infoDisplay.margin * 2)}px)`};
  overflow: auto;

  ${getBorderImage(LoweredTextureSVG, 1)}
`;
