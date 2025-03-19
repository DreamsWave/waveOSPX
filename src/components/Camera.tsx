import { useBackground } from "@/contexts/BackgroundContext";
import useSettings from "@/hooks/useSettings";
import {
  BACKGROUND_SCROLL_SPEED_X,
  BACKGROUND_SCROLL_SPEED_Y,
  THROTTLE_DELAY_MS,
} from "@/utils/constants";
import { throttle } from "@/utils/functions";
import { motion } from "motion/react";
import { memo, useEffect, useMemo } from "react";
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

const Camera = memo(() => {
  const { reducedMotion } = useSettings();
  const theme = useTheme();
  const { backgroundX, backgroundY } = useBackground();

  const throttledHandleMouseMove = useMemo(
    () =>
      throttle((event: MouseEvent) => {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        backgroundX.set(
          ((clientX - centerX) / centerX) * BACKGROUND_SCROLL_SPEED_X
        );
        backgroundY.set(
          ((clientY - centerY) / centerY) * BACKGROUND_SCROLL_SPEED_Y
        );
      }, THROTTLE_DELAY_MS),
    [backgroundX, backgroundY]
  );

  useEffect(() => {
    const isSmallScreen = () =>
      window.innerWidth <= theme.sizes.monitor.screen.resolution.width &&
      window.innerHeight <= theme.sizes.monitor.screen.resolution.height;

    if (isMobile || isSmallScreen() || reducedMotion) {
      backgroundX.set(0);
      backgroundY.set(0);
      return;
    }

    window.addEventListener("mousemove", throttledHandleMouseMove);
    return () =>
      window.removeEventListener("mousemove", throttledHandleMouseMove);
  }, [
    backgroundX,
    backgroundY,
    theme.sizes.monitor.screen.resolution.height,
    theme.sizes.monitor.screen.resolution.width,
    reducedMotion,
    throttledHandleMouseMove,
  ]);

  return <StyledCamera />;
});

export default Camera;
