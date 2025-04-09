import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.s(1)}px;
  padding: ${({ theme }) => theme.s(1)}px;
`;

export const StyledNavigationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: ${({ theme }) => theme.getFontSize("xs")};
  border: none;

  &:hover {
    background-color: transparent;
  }
`;
