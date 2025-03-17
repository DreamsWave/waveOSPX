import MainBackgroundImage from "@/assets/images/main-background.png";
import { getScreenMediaQuery } from "@/utils/functions";
import { motion, MotionValue } from "motion/react";
import { memo } from "react";
import styled from "styled-components";

const BackgroundStyled = styled(motion.div)`
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
  }
`;

const BackgroundImage = styled.img<{ $isFocused: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(${({ $isFocused }) => ($isFocused ? 0 : "1px")});
  scale: ${({ $isFocused }) => ($isFocused ? 1 : 0.95)};
  transition: filter 0.5s ease, scale 0.5s ease-in-out;
`;

type Props = {
  children: React.ReactNode;
  isFocused: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

const Background = memo(({ children, isFocused, x, y }: Props) => {
  return (
    <BackgroundStyled style={{ x, y, translate: "-50% -50%" }}>
      <BackgroundImage src={MainBackgroundImage} $isFocused={isFocused} />
      {children}
    </BackgroundStyled>
  );
});

export default Background;
