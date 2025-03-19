import Background from "@/components/Background";
import Screen from "@/components/Screen";
import useFocus from "@/hooks/useFocus";
import useReducedMotion from "@/hooks/useReducedMotion";
import {
  BACKGROUND_SCROLL_SPEED_X,
  BACKGROUND_SCROLL_SPEED_Y,
} from "@/utils/constants";
import { motion, useMotionValue } from "motion/react";
import { memo, useEffect } from "react";
import { isMobile } from "react-device-detect";
import styled, { useTheme } from "styled-components";

const CameraStyled = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Clip content outside the viewport */
  top: 0;
  left: 0;
`;

type Props = {
  children: React.ReactNode;
};

const Camera = memo(({ children }: Props) => {
  const { isFocused } = useFocus();
  const theme = useTheme();
  const { reducedMotion } = useReducedMotion();

  // Motion values to track background position (inverse of camera)
  const backgroundX = useMotionValue(0);
  const backgroundY = useMotionValue(0);

  // Update background position on mouse move, only for non-mobile and large screens
  useEffect(() => {
    const isSmallScreen = () =>
      window.innerWidth <= theme.sizes.monitor.screen.resolution.width &&
      window.innerHeight <= theme.sizes.monitor.screen.resolution.height;

    if (isMobile || isSmallScreen() || reducedMotion) {
      // Reset motion values to 0 and skip animation
      backgroundX.set(0);
      backgroundY.set(0);
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate offset from center (normalized between -1 and 1)
      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;

      // Move background opposite to mouse (e.g., -10px to 10px)
      backgroundX.set(offsetX * BACKGROUND_SCROLL_SPEED_X); // Inverse direction
      backgroundY.set(offsetY * BACKGROUND_SCROLL_SPEED_Y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [
    backgroundX,
    backgroundY,
    theme.sizes.monitor.screen.resolution.height,
    theme.sizes.monitor.screen.resolution.width,
    reducedMotion,
  ]);

  return (
    <CameraStyled>
      <Background isFocused={isFocused} x={backgroundX} y={backgroundY}>
        <Screen isFocused={isFocused}>{children}</Screen>
      </Background>
    </CameraStyled>
  );
});

export default Camera;
