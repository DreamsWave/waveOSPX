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
