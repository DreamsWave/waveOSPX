import styled from "styled-components";

const Outline = styled.div`
  display: flex;
  border: ${({ theme }) => theme.getBorder()};
`;

export default Outline;
