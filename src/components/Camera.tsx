import Background from "@/components/Background";
import Screen from "@/components/Screen";
import useCamera from "@/hooks/useCamera";
import useSettings from "@/hooks/useSettings";
import {
  BACKGROUND_SCROLL_SPEED_X,
  BACKGROUND_SCROLL_SPEED_Y,
} from "@/utils/constants";
import { motion, useMotionValue } from "motion/react";
import { memo, useEffect } from "react";
import { isMobile } from "react-device-detect";
import styled, { useTheme } from "styled-components";

const StyledCamera = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
`;

type Props = {
  children: React.ReactNode;
};

const Camera = memo(({ children }: Props) => {
  const { isFocused } = useCamera();
  const { reducedMotion } = useSettings();
  const theme = useTheme();

  const backgroundX = useMotionValue(0);
  const backgroundY = useMotionValue(0);

  useEffect(() => {
    const isSmallScreen = () =>
      window.innerWidth <= theme.sizes.monitor.screen.resolution.width &&
      window.innerHeight <= theme.sizes.monitor.screen.resolution.height;

    if (isMobile || isSmallScreen() || reducedMotion) {
      backgroundX.set(0);
      backgroundY.set(0);
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;
      backgroundX.set(offsetX * BACKGROUND_SCROLL_SPEED_X);
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
    <StyledCamera>
      <Background isFocused={isFocused} x={backgroundX} y={backgroundY}>
        <Screen isFocused={isFocused}>{children}</Screen>
      </Background>
    </StyledCamera>
  );
});

export default Camera;
