import styled from "styled-components";

const StyledDebugButton = styled.button`
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default StyledDebugButton;
