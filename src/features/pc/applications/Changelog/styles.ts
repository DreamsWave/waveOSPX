import LoweredTextureSVG from "@/assets/textures/pc/lowered.svg";
import { getBorderImage } from "@/styles/styledUtils";
import styled from "styled-components";

export const StyledChangelog = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const StyledChangelogContent = styled.div`
  background: ${({ theme }) => theme.apps.pc.Changelog.background};
  margin: ${({ theme }) => `${theme.s(theme.apps.pc.Changelog.margin)}px`};
  height: ${({ theme }) =>
    `calc(100% - ${theme.s(theme.apps.pc.Changelog.margin * 2)}px)`};
  overflow: auto;

  ${getBorderImage(LoweredTextureSVG, 1)}
`;
