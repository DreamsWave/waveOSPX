import { ICON_SIZE_MAP } from "@/constants/icons";
import type { IconExtension, IconSize } from "@/types/icons";
import { type DefaultTheme, type RuleSet, css } from "styled-components";

// Import all icons from src/assets/icons/
const iconModules = import.meta.glob("/src/assets/icons/**/*.{png,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const ICON_CACHE = new Map<string, string>();

// Build iconMap with size and single folder support, ensuring string URLs
const iconMap: Record<string, string> = {};
for (const [path, module] of Object.entries(iconModules)) {
  const match = path.match(/\/src\/assets\/icons\/([^/]+)\/(.+)\.(png|svg)$/);
  if (match) {
    const [, folder, name] = match;
    const key = folder === "single" ? name : `${folder}/${name}`;
    // Coerce module to string: handle both string and { default: string } cases
    iconMap[key] =
      typeof module === "string"
        ? module
        : (module as { default: string }).default;
  }
}

interface IconSourceOptions {
  name: string;
  size: IconSize;
  variants?: Partial<Record<IconSize, string>>;
  extension?: IconExtension;
}

const generateIconCacheKey = (options: IconSourceOptions): string => {
  return `${options.name}-${options.size}-${options.extension || "png"}`;
};

export const getIconSource = ({
  name,
  size,
  variants,
  extension = "png",
}: IconSourceOptions): string => {
  const cacheKey = generateIconCacheKey({ name, size, extension });
  if (ICON_CACHE.has(cacheKey)) {
    const cachedIcon = ICON_CACHE.get(cacheKey);
    if (cachedIcon) {
      return cachedIcon;
    }
  }

  const variantFileName = variants?.[size] || name;
  const sizeKey = `${ICON_SIZE_MAP[size]}/${variantFileName}`;
  let iconSrc = iconMap[sizeKey] || iconMap[variantFileName]; // Check size folder or single

  if (!iconSrc) {
    console.error(`Icon not found: ${sizeKey}`);
    iconSrc =
      iconMap[`${ICON_SIZE_MAP[size]}/default-icon`] || iconMap["default-icon"];
  }

  if (iconSrc) {
    ICON_CACHE.set(cacheKey, iconSrc);
    return iconSrc;
  }

  throw new Error(`Default icon not found for size ${size}`);
};

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
