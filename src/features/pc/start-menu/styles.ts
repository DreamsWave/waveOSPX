import styled from "styled-components";

export const StartMenuContainer = styled.nav<{ $isOpen: boolean }>`
  position: absolute;
  bottom: ${({ theme }) => `${theme.s(theme.pc.taskbar.height - 1)}px`};
  left: ${({ theme }) => `${theme.s(-1)}px`};
  background: ${({ theme }) => theme.pc.startMenu.background};
  border: ${({ theme }) =>
    theme.getBorder(
      theme.pc.startMenu.borderWidth,
      theme.pc.startMenu.borderColor
    )};
  padding: 8px;
  min-width: 200px;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  z-index: ${({ theme }) => theme.common.zIndex.highest};
`;

export const StartMenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.pc.startMenu.text};

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`;
