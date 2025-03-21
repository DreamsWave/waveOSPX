// import { m as motion } from "motion/react";
import styled from "styled-components";

// type StyledWindowProps = {
//   $backgroundBlur?: string;
//   $backgroundColor?: string;
//   $isForeground: boolean;
// };

export const StyledWindow = styled.div<{
  $isFocused: boolean;
  $isMinimized: boolean;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.pc.window.background};
  border: 1px solid ${({ $isFocused }) => ($isFocused ? "#00f" : "#ccc")};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: ${({ $isMinimized }) => ($isMinimized ? "none" : "block")};
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
