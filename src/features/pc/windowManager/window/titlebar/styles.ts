import styled from "styled-components";

export const StyledTitlebar = styled.div`
  height: 30px;
  background-color: ${({ theme }) =>
    theme.colors.pc.window.titleBar.background || "#ccc"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  cursor: move;
`;

export const StyledTitle = styled.span`
  flex-grow: 1;
  text-align: left;
  padding-left: 5px;
  color: ${({ theme }) => theme.colors.pc.window.titleBar.text || "#000"};
`;

export const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.pc.window.titleBar.text || "#fff"};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.pc.window.titleBar.backgroundHover || "#ddd"};
  }
`;
