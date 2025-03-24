import { px } from "@/utils/functions";
import styled from "styled-components";

const Outline = styled.div`
  display: flex;
  border: ${px(1)} solid ${({ theme }) => theme.colors.pc.border};
`;

export default Outline;
