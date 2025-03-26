import styled from "styled-components";

export const StyledTaskbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  height: ${({ theme }) => `${theme.s(17)}px`};
  width: 100%;
  background: ${({ theme }) => theme.colors.pc.taskbar.background};
  border-top: ${({ theme }) =>
    `${theme.s(theme.sizes.pc.taskbar.borderWidthPX)}px solid ${
      theme.colors.pc.border
    }`};
  display: flex;
  gap: ${({ theme }) => `${theme.s(2)}px`};
  padding: ${({ theme }) => `${theme.s(2)}px`};
  z-index: ${({ theme }) => theme.sizes.zIndex.highest};
`;

export const StyledTaskbarSeparator = styled.div`
  height: 100%;
  width: ${({ theme }) => `${theme.s(1)}px`};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: ${({ theme }) => `${theme.s(1)}px`};
    height: ${({ theme }) => `${theme.s(4)}px`};
    background: ${({ theme }) => theme.colors.pc.taskbar.separator};
  }
`;

export const StyledTaskbarAppButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => `${theme.s(1)}px`};
  overflow: hidden;
  overflow-x: auto;
  width: 100%;
`;
