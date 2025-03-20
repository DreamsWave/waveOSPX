import useCamera from "@/hooks/useCamera";
import { MotionValue } from "motion/react";

type BackgroundContextState = {
  backgroundX: MotionValue<number>;
  backgroundY: MotionValue<number>;
  isFocused: boolean;
};

const useBackgroundContextState = (): BackgroundContextState => {
  const backgroundX = new MotionValue(0);
  const backgroundY = new MotionValue(0);
  const { isFocused } = useCamera();

  return { backgroundX, backgroundY, isFocused };
};

export default useBackgroundContextState;
