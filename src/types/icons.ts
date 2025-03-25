export type IconSize = "xs" | "sm" | "md" | "lg"; // 8x8, 16x16, 32x32, 64x64
export type IconExtension = "png" | "svg";

export interface Icon {
  name?: string; // Base name of the icon (e.g., "music-player")
  size?: IconSize; // Default size if no variants or specific size is provided
  variants?: Partial<Record<IconSize, string>>; // Optional: Map of size-specific filenames
  extension?: IconExtension; // Default: "png"
  height?: number; // Override height in pixel units (before scaling)
  width?: number; // Override width in pixel units (before scaling)
  alt?: string;
  src?: string; // Direct source URL (bypasses name-based lookup)
}
