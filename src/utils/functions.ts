import { css, DefaultTheme, RuleSet } from "styled-components";

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

export const getFontSize = (
  type: keyof DefaultTheme["sizes"]["fontSizes"] = "base"
): RuleSet => css`
  ${({ theme }) => `${theme.sizes.fontSizes[type] * theme.sizes.pixelSize}px`}
`;

export const getFormattedTime = (): string => {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

import { ICON_SIZE_MAP } from "@/constants/icons";
import { Icon, IconExtension, IconSize } from "@/types/icons";

interface IconSourceOptions {
  name: Icon["name"];
  size: IconSize;
  extension?: IconExtension;
}

const ICON_CACHE = new Map<string, string>();

/**
 * Generates a cache key for an icon
 */
const generateIconCacheKey = (options: IconSourceOptions): string => {
  return `${options.name}-${options.size}-${options.extension || "png"}`;
};

/**
 * Validates if the icon exists in the public directory
 */
const validateIconPath = async (iconPath: string): Promise<boolean> => {
  try {
    const response = await fetch(iconPath, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Gets the icon source URL with caching
 */
export const getIconSource = async ({
  name,
  size,
  extension = "png",
}: IconSourceOptions): Promise<string> => {
  const cacheKey = generateIconCacheKey({ name, size, extension });

  // Check cache first
  if (ICON_CACHE.has(cacheKey)) {
    return ICON_CACHE.get(cacheKey)!;
  }

  // Construct the icon path using the size mapping
  const iconPath = `/assets/icons/${ICON_SIZE_MAP[size]}/${name}.${extension}`;

  try {
    // Validate if the icon exists
    const exists = await validateIconPath(iconPath);

    if (!exists) {
      throw new Error(`Icon not found: ${iconPath}`);
    }

    ICON_CACHE.set(cacheKey, iconPath);
    return iconPath;
  } catch (error) {
    console.error(`Failed to load icon: ${name}`, error);

    // Try fallback to default icon
    if (name !== "default-icon") {
      return getIconSource({
        name: "default-icon",
        size,
        extension,
      });
    }

    throw error;
  }
};
