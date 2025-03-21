import { useBackground } from "@/features/background/backgroundContext";
import { StyledCamera } from "@/features/camera/styles";
import { RootState } from "@/store";
import {
  BACKGROUND_SCROLL_SPEED_X,
  BACKGROUND_SCROLL_SPEED_Y,
  THROTTLE_DELAY_MS,
} from "@/utils/constants";
import { useMouse, useThrottle, useWindowSize } from "@uidotdev/usehooks";
import { memo, useEffect, useMemo } from "react";
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";
import { useTheme as useStyledTheme } from "styled-components";

const Camera = memo(() => {
  const { reducedMotion } = useSelector((state: RootState) => state.settings);
  const {
    sizes: { monitor, backgroundImageSize },
  } = useStyledTheme();
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
      width <= monitor.screen.resolution.width &&
      height <= monitor.screen.resolution.height,
    [width, height, monitor.screen.resolution]
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
    const clampedX = clampBackgroundPosition(
      backgroundImageSize.width,
      backgroundImageSize.height,
      rawX,
      "x"
    );
    const clampedY = clampBackgroundPosition(
      backgroundImageSize.width,
      backgroundImageSize.height,
      rawY,
      "y"
    );
    backgroundX.set(clampedX);
    backgroundY.set(clampedY);
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
    backgroundImageSize,
  ]);

  // Effect to clamp background position on window resize
  useEffect(() => {
    if (width != null && height != null) {
      backgroundX.set(
        clampBackgroundPosition(
          backgroundImageSize.width,
          backgroundImageSize.height,
          backgroundX.get(),
          "x"
        )
      );
      backgroundY.set(
        clampBackgroundPosition(
          backgroundImageSize.width,
          backgroundImageSize.height,
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
    backgroundImageSize,
  ]);

  // // Hotkeys for manual background movement
  // useHotkeys("ArrowLeft", () => {
  //   const newX = backgroundX.get() - BACKGROUND_SCROLL_SPEED_X;
  //   backgroundX.set(
  //     clampBackgroundPosition(
  //       backgroundImageSize.width,
  //       backgroundImageSize.height,
  //       newX,
  //       "x"
  //     )
  //   );
  // });
  // useHotkeys("ArrowRight", () => {
  //   const newX = backgroundX.get() + BACKGROUND_SCROLL_SPEED_X;
  //   backgroundX.set(
  //     clampBackgroundPosition(
  //       backgroundImageSize.width,
  //       backgroundImageSize.height,
  //       newX,
  //       "x"
  //     )
  //   );
  // });
  // useHotkeys("ArrowUp", () => {
  //   const newY = backgroundY.get() - BACKGROUND_SCROLL_SPEED_Y;
  //   backgroundY.set(
  //     clampBackgroundPosition(
  //       backgroundImageSize.width,
  //       backgroundImageSize.height,
  //       newY,
  //       "y"
  //     )
  //   );
  // });
  // useHotkeys("ArrowDown", () => {
  //   const newY = backgroundY.get() + BACKGROUND_SCROLL_SPEED_Y;
  //   backgroundY.set(
  //     clampBackgroundPosition(
  //       backgroundImageSize.width,
  //       backgroundImageSize.height,
  //       newY,
  //       "y"
  //     )
  //   );
  // });

  return <StyledCamera />;
});

export default Camera;
