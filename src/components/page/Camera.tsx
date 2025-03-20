import { useBackground } from "@/contexts/background";
import useSettings from "@/hooks/useSettings";
import {
  BACKGROUND_SCROLL_SPEED_X,
  BACKGROUND_SCROLL_SPEED_Y,
  THROTTLE_DELAY_MS,
} from "@/utils/constants";
import { useMouse, useThrottle, useWindowSize } from "@uidotdev/usehooks";
import { motion } from "motion/react";
import { memo, useEffect, useMemo } from "react";
import { isMobile } from "react-device-detect";
import { useHotkeys } from "react-hotkeys-hook";
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
  const { backgroundX, backgroundY, clampBackgroundPosition } = useBackground();
  const [mousePosition] = useMouse();
  const { width, height } = useWindowSize();

  // Throttle mouse coordinates separately for performance
  const throttledX = useThrottle(mousePosition.x ?? 0, THROTTLE_DELAY_MS);
  const throttledY = useThrottle(mousePosition.y ?? 0, THROTTLE_DELAY_MS);

  // Compute isSmallScreen reactively based on window size
  const isSmallScreen = useMemo(
    () =>
      width != null &&
      height != null &&
      width <= theme.sizes.monitor.screen.resolution.width &&
      height <= theme.sizes.monitor.screen.resolution.height,
    [width, height, theme.sizes.monitor.screen.resolution]
  );

  // Effect to set background to 0 under specific conditions
  useEffect(() => {
    if (reducedMotion || isMobile || isSmallScreen) {
      backgroundX.set(0);
      backgroundY.set(0);
    }
  }, [reducedMotion, isSmallScreen, backgroundX, backgroundY]);

  // Effect to update background position based on throttled mouse movement
  useEffect(() => {
    if (
      reducedMotion ||
      isMobile ||
      isSmallScreen ||
      width == null ||
      height == null
    ) {
      return;
    }
    const centerX = width / 2;
    const centerY = height / 2;
    const rawX = ((throttledX - centerX) / centerX) * BACKGROUND_SCROLL_SPEED_X;
    const rawY = ((throttledY - centerY) / centerY) * BACKGROUND_SCROLL_SPEED_Y;
    backgroundX.set(
      clampBackgroundPosition(
        theme.sizes.backgroundImageSize.width,
        theme.sizes.backgroundImageSize.height,
        rawX,
        "x"
      )
    );
    backgroundY.set(
      clampBackgroundPosition(
        theme.sizes.backgroundImageSize.width,
        theme.sizes.backgroundImageSize.height,
        rawY,
        "y"
      )
    );
  }, [
    throttledX,
    throttledY,
    width,
    height,
    reducedMotion,
    isSmallScreen,
    backgroundX,
    backgroundY,
    clampBackgroundPosition,
    theme.sizes.backgroundImageSize,
  ]);

  // Effect to clamp background position on window resize
  useEffect(() => {
    if (width != null && height != null) {
      backgroundX.set(
        clampBackgroundPosition(
          theme.sizes.backgroundImageSize.width,
          theme.sizes.backgroundImageSize.height,
          backgroundX.get(),
          "x"
        )
      );
      backgroundY.set(
        clampBackgroundPosition(
          theme.sizes.backgroundImageSize.width,
          theme.sizes.backgroundImageSize.height,
          backgroundY.get(),
          "y"
        )
      );
    }
  }, [
    width,
    height,
    backgroundX,
    backgroundY,
    clampBackgroundPosition,
    theme.sizes.backgroundImageSize,
  ]);

  // Hotkeys for manual background movement
  useHotkeys("ArrowLeft", () => {
    const newX = backgroundX.get() - BACKGROUND_SCROLL_SPEED_X;
    backgroundX.set(
      clampBackgroundPosition(
        theme.sizes.backgroundImageSize.width,
        theme.sizes.backgroundImageSize.height,
        newX,
        "x"
      )
    );
  });
  useHotkeys("ArrowRight", () => {
    const newX = backgroundX.get() + BACKGROUND_SCROLL_SPEED_X;
    backgroundX.set(
      clampBackgroundPosition(
        theme.sizes.backgroundImageSize.width,
        theme.sizes.backgroundImageSize.height,
        newX,
        "x"
      )
    );
  });
  useHotkeys("ArrowUp", () => {
    const newY = backgroundY.get() - BACKGROUND_SCROLL_SPEED_Y;
    backgroundY.set(
      clampBackgroundPosition(
        theme.sizes.backgroundImageSize.width,
        theme.sizes.backgroundImageSize.height,
        newY,
        "y"
      )
    );
  });
  useHotkeys("ArrowDown", () => {
    const newY = backgroundY.get() + BACKGROUND_SCROLL_SPEED_Y;
    backgroundY.set(
      clampBackgroundPosition(
        theme.sizes.backgroundImageSize.width,
        theme.sizes.backgroundImageSize.height,
        newY,
        "y"
      )
    );
  });

  return <StyledCamera />;
});

export default Camera;
