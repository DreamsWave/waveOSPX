import styled from "styled-components";

export const StartMenuContainer = styled.nav<{ $isOpen: boolean }>`
  position: absolute;
  bottom: ${({ theme }) => `${theme.s(theme.sizes.pc.taskbar.heightPX - 2)}px`};
  left: ${({ theme }) => `${theme.s(1)}px`};
  background: ${({ theme }) => theme.colors.pc.startMenu.background};
  border: ${({ theme }) =>
    `${theme.s(theme.sizes.pc.startMenu.borderWidth)}px solid ${
      theme.colors.pc.startMenu.borderColor
    }`};
  padding: 8px;
  min-width: 200px;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: ${({ theme }) => theme.sizes.zIndex.highest};
`;

export const StartMenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.pc.startMenu.text};

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`;
