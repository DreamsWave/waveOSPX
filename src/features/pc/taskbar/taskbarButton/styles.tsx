import styled from "styled-components";

export const StyledTaskbarButton = styled.button`
  height: ${({ theme }) => `${theme.s(12)}px`};
  font-family: ${({ theme }) => theme.formats.systemFont};
  font-size: ${({ theme }) => `${theme.s(5)}px`};
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.pc.taskbar.text};
  border: ${({ theme }) => theme.getBorder()};
`;

export const StyledTaskbarButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.s(2)}px ${theme.s(2)}px`};
  /* min-width: ${({ theme }) => `${theme.s(30)}px`}; */
  max-width: ${({ theme }) => `${theme.s(60)}px`};
  gap: ${({ theme }) => `${theme.s(2)}px`};
  overflow: hidden;
  flex-wrap: nowrap;
`;

export const StyledTaskbarButtonTitle = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: ${({ theme }) => `${theme.s(1)}px`};
`;
