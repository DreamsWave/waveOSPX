import styled from "styled-components";

export const StyledTaskbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  height: ${({ theme }) => `${theme.s(theme.pc.taskbar.height)}px`};
  width: 100%;
  background: ${({ theme }) => theme.pc.taskbar.background};
  border-top: ${({ theme }) => theme.getBorder()};
  display: flex;
  gap: ${({ theme }) => `${theme.s(2)}px`};
  z-index: ${({ theme }) => theme.common.zIndex.highest};
`;

export const StyledTaskbarAppButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => `${theme.s(1)}px`};
  overflow: hidden;
  width: 100%;
`;
