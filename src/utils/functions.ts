import { css, RuleSet } from "styled-components";

/**
 * Converts a size to pixels using theme's pixelSize or returns the size as-is if a string.
 * @param size - Number of pixel units
 */
export const px = (size: number = 1): RuleSet => css`
  ${({ theme }) => `${theme.sizes.pixelSize * size}px`}
`;

export const getScreenMediaQuery = (): RuleSet => css`
  ${({ theme }) =>
    `@media (max-width: ${theme.sizes.monitor.screen.resolution.width}px) or (max-height: ${theme.sizes.monitor.screen.resolution.height}px)`}
`;

/**
 * Debounces a function, delaying its execution until after a specified wait time.
 * @param fn - The function to debounce
 * @param ms - Delay in milliseconds
 * @returns A debounced version of the function
 */
export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T,
  ms: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), ms);
  };
};

/**
 * Throttles a function, limiting its execution to once every specified interval.
 * @param fn - The function to throttle
 * @param ms - Interval in milliseconds
 * @returns A throttled version of the function
 */
export const throttle = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T,
  ms: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= ms) {
      fn(...args);
      lastCall = now;
    }
  };
};
