import styled from "styled-components";

const StyledPcDesktop = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

type Props = {
  children: React.ReactNode;
};

const PcDesktop = ({ children }: Props) => {
  return <StyledPcDesktop>{children}</StyledPcDesktop>;
};

export default PcDesktop;
