import {
  BASE_SPEED,
  MAX_SPEED,
  THRESHOLD_X,
  THRESHOLD_Y,
} from "@/features/camera/constants";

const SPEED_RANGE = MAX_SPEED - BASE_SPEED;
const SLOW_PHASE_FACTOR = 0.2; // 20% of speed range in slow phase
const FAST_PHASE_FACTOR = 0.8; // 80% of speed range in fast phase

export const calculateCameraSpeed = (
  distance: number,
  threshold: number
): number => {
  if (distance <= threshold) {
    return (
      BASE_SPEED + (SPEED_RANGE * SLOW_PHASE_FACTOR * distance) / threshold
    );
  }
  const remainingDistance = (distance - threshold) / (1 - threshold);
  return (
    BASE_SPEED +
    SPEED_RANGE * SLOW_PHASE_FACTOR +
    SPEED_RANGE * FAST_PHASE_FACTOR * remainingDistance ** 2
  );
};

export const getDynamicScrollSpeed = (
  width: number,
  height: number,
  mouseX: number,
  mouseY: number
) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const distanceX = Math.abs(mouseX - centerX) / centerX;
  const distanceY = Math.abs(mouseY - centerY) / centerY;

  return {
    speedX: calculateCameraSpeed(distanceX, THRESHOLD_X),
    speedY: calculateCameraSpeed(distanceY, THRESHOLD_Y),
  };
};
