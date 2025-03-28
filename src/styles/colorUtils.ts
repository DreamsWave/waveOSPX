import palette from "@/styles/palette.json";

export type ColorFamily =
  | "Slate"
  | "PaleAmber"
  | "Orange"
  | "DeepBlue"
  | "VividOrange"
  | "SoftBlue"
  | "DarkTeal"
  | "SkyBlue"
  | "Jade"
  | "Coral"
  | "Gray"
  | "WarmRed"
  | "Olive"
  | "Rose"
  | "Cyan"
  | "Gold"
  | "SoftOrange"
  | "LightBlue"
  | "Pink"
  | "Red"
  | "Green"
  | "Amber"
  | "MutedPink"
  | "DarkGreen"
  | "Rust"
  | "Teal"
  | "Blue"
  | "LightRed"
  | "Violet"
  | "Indigo"
  | "Salmon"
  | "Yellow";

// Get color from palette, shade 0 (darkest) to 7 (lightest)
export const getColor = (family: ColorFamily, shade: number): string => {
  const colorFamily = palette.colors.find((c) => c.name === family);
  if (!colorFamily) {
    console.warn(`Color family "${family}" not found in palette`);
    return "#000000";
  }

  // Ensure shade is within bounds
  const safeShade = Math.max(0, Math.min(7, shade));
  return colorFamily.shades[safeShade];
};

// Example semantic color functions
export const getPrimaryColor = (shade = 4) => getColor("DeepBlue", shade);
export const getSecondaryColor = (shade = 4) => getColor("VividOrange", shade);
export const getNeutralColor = (shade = 4) => getColor("Slate", shade);

// Get an entire palette row for gradients or similar needs
export const getColorFamily = (family: ColorFamily): string[] => {
  const colorFamily = palette.colors.find((c) => c.name === family);
  return colorFamily?.shades || [];
};

// Helper function to determine if text should be light or dark based on background
export const getTextColor = (
  bgColor: string,
  dark: string = getColor("Slate", 0),
  light: string = getColor("Slate", 7)
): string => {
  // Simple algorithm - convert hex to RGB and check luminance
  const hex = bgColor.replace("#", "");
  const r = Number.parseInt(hex.substring(0, 2), 16);
  const g = Number.parseInt(hex.substring(2, 4), 16);
  const b = Number.parseInt(hex.substring(4, 6), 16);

  // Calculate luminance using perceived brightness formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? dark : light;
};
