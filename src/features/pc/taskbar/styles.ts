import { px } from "@/utils/functions";
import styled from "styled-components";

export const StyledTaskbar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: ${px(17)};
  width: 100%;
  background: ${({ theme }) => theme.colors.pc.taskbar.background};
  border-top: ${({ theme }) =>
    `${theme.sizes.pc.taskbar.borderWidthPX * theme.sizes.pixelSize}px solid ${
      theme.colors.pc.border
    }`};
`;
