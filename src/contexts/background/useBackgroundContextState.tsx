import useCamera from "@/hooks/useCamera";
import { MotionValue } from "motion/react";

type BackgroundContextState = {
  backgroundX: MotionValue<number>;
  backgroundY: MotionValue<number>;
  isFocused: boolean;
  clampBackgroundPosition: (
    backgroundWidth: number,
    backgroundHeight: number,
    value: number,
    axis: "x" | "y"
  ) => number;
};

const useBackgroundContextState = (): BackgroundContextState => {
  const backgroundX = new MotionValue(0);
  const backgroundY = new MotionValue(0);
  const { isFocused } = useCamera();

  const clampBackgroundPosition = (
    backgroundWidth: number,
    backgroundHeight: number,
    value: number,
    axis: "x" | "y"
  ): number => {
    const imageSize = axis === "x" ? backgroundWidth : backgroundHeight;
    const viewportSize = axis === "x" ? window.innerWidth : window.innerHeight;

    // Maximum allowed movement is half the difference between image and viewport size
    const maxOffset = Math.max(0, (imageSize - viewportSize) / 2);
    return Math.max(-maxOffset, Math.min(maxOffset, value));
  };

  return { backgroundX, backgroundY, isFocused, clampBackgroundPosition };
};

export default useBackgroundContextState;
