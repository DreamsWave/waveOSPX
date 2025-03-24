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
  display: flex;
  gap: ${px(2)};
  padding: ${px(2)};
`;

export const StyledTaskbarSeparator = styled.div`
  height: 100%;
  width: ${px(1)};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: ${px(1)};
    height: ${px(4)};
    background: ${({ theme }) => theme.colors.pc.taskbar.separator};
  }
`;

export const StyledTaskbarAppButtons = styled.div`
  display: flex;
  gap: ${px(1)};
`;
