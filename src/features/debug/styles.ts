import styled from "styled-components";

export const StyledDebug = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({ theme }) => theme.common.zIndex.top};
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
  width: ${({ theme }) => theme.debug.buttonSize}px;
  height: ${({ theme }) => theme.debug.buttonSize}px;
  background: ${({ theme }) => theme.debug.background};
  color: ${({ theme }) => theme.debug.text};
  cursor: pointer;
  border: none;
  font-size: ${({ theme }) => theme.getFontSize("xs")};

  &:hover {
    background: ${({ theme }) => theme.debug.backgroundHover};
  }
`;

export const StyledDebugMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: ${({ theme }) => `${theme.s(2)}px`};
  background: ${({ theme }) => theme.debug.background};
  padding: ${({ theme }) => `${theme.s(2)}px`};
  list-style: none;
`;

export const StyledDebugMenuItem = styled.li`
  width: 100%;
  margin: 0;
`;

export const StyledDebugMenuButton = styled(StyledDebugButton)`
  width: 100%;
  justify-content: start;
  background: transparent;
  padding: ${({ theme }) => `${theme.s(3)}px ${theme.s(4)}px`};

  &:hover {
    background: ${({ theme }) => theme.debug.background};
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
