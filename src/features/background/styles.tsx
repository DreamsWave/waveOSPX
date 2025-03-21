import { getScreenMediaQuery } from "@/utils/functions";
import { motion } from "motion/react";
import styled from "styled-components";

export const StyledBackground = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: ${({ theme }) => theme.sizes.backgroundImageSize.width}px;
  height: ${({ theme }) => theme.sizes.backgroundImageSize.height}px;

  ${getScreenMediaQuery()} {
    translate: 0 !important;
    top: 0;
    left: 0;
    transform: translate(0, 0) !important;
  }
`;

export const StyledBackgroundImage = styled.img<{ $isFocused: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(${({ $isFocused }) => ($isFocused ? 0 : "1px")});
  scale: ${({ $isFocused }) => ($isFocused ? 1 : 0.95)};
  transition: filter 0.5s ease, scale 0.5s ease-in-out;
`;
