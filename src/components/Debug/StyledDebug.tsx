import styled from "styled-components";

export const StyledDebug = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({ theme }) => theme.sizes.zIndex?.top || 1000};
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: end;
`;

export const StyledDebugButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const StyledDebugMenu = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: end;
  gap: 5px;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px;
`;
