import { useBackground } from "@/features/background/context";
import { THROTTLE_DELAY_MS } from "@/features/camera/constants";
import { getDynamicScrollSpeed } from "@/features/camera/functions";
import type { RootState } from "@/store";
import { useMouse, useThrottle, useWindowSize } from "@uidotdev/usehooks";
import { memo, useEffect, useMemo } from "react";
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";

const Camera = memo(() => {
  const { reducedMotion } = useSelector((state: RootState) => state.settings);
  const {
    common: { backgroundImageSize },
    pc: { screen },
  } = useTheme();
  const { backgroundX, backgroundY, clampBackgroundPosition } = useBackground();
  const [mousePosition] = useMouse();
  const { width, height } = useWindowSize();

  const throttledX = useThrottle(mousePosition.x ?? 0, THROTTLE_DELAY_MS);
  const throttledY = useThrottle(mousePosition.y ?? 0, THROTTLE_DELAY_MS);

  const isSmallScreen = useMemo(
    () =>
      width != null &&
      height != null &&
      width <= screen.resolution.width &&
      height <= screen.resolution.height,
    [width, height, screen.resolution]
  );

  const scrollSpeeds = useMemo(() => {
    if (!width || !height) return { speedX: 2, speedY: 2 }; // Fallback to base speed
    return getDynamicScrollSpeed(width, height, throttledX, throttledY);
  }, [width, height, throttledX, throttledY]);

  useEffect(() => {
    if (reducedMotion || isMobile || isSmallScreen) {
      backgroundX.set(0);
      backgroundY.set(0);
    }
  }, [reducedMotion, isSmallScreen, backgroundX, backgroundY]);

  useEffect(() => {
    if (reducedMotion || isMobile || isSmallScreen || !width || !height) return;

    const centerX = width / 2;
    const centerY = height / 2;
    const { speedX, speedY } = scrollSpeeds;

    const rawX = ((throttledX - centerX) / centerX) * -speedX;
    const rawY = ((throttledY - centerY) / centerY) * -speedY;

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

    backgroundX.set(Math.round(clampedX));
    backgroundY.set(Math.round(clampedY));
  }, [
    throttledX,
    throttledY,
    width,
    height,
    reducedMotion,
    isSmallScreen,
    scrollSpeeds,
    backgroundX,
    backgroundY,
    clampBackgroundPosition,
    backgroundImageSize,
  ]);

  useEffect(() => {
    if (!width || !height) return;

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
  }, [
    width,
    height,
    backgroundX,
    backgroundY,
    clampBackgroundPosition,
    backgroundImageSize,
  ]);

  return null;
});

export default Camera;
