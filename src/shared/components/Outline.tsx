import styled from "styled-components";

const Outline = styled.div`
  display: flex;
  border: ${({ theme }) => `${theme.s(1)}px solid ${theme.pc.border}`};
`;

export default Outline;
