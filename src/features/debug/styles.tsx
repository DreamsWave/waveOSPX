import styled from "styled-components";

export const StyledDebug = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({ theme }) => theme.sizes.zIndex?.top || 1000};
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const StyledDebugButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: ${({ theme }) => theme.sizes.debug.buttonSize}px;
  height: ${({ theme }) => theme.sizes.debug.buttonSize}px;
  background: ${({ theme }) => theme.colors.debug.background};
  color: ${({ theme }) => theme.colors.debug.text};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.debug.backgroundHover};
  }
`;

export const StyledDebugMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: ${({ theme }) => `${theme.s(2)}px`};
  background: ${({ theme }) => theme.colors.debug.background};
  padding: ${({ theme }) => `${theme.s(2)}px`};
  width: ${({ theme }) => theme.sizes.debug.menuWidth}px;
`;

export const StyledDebugMenuItem = styled.li`
  width: 100%;
`;

export const StyledDebugMenuButton = styled(StyledDebugButton)`
  width: 100%;
  justify-content: start;
  background: transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.debug.background};
  }
`;

export const StyledCanvas = styled.canvas<{ $isVisible: boolean }>`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  z-index: -1;
`;
