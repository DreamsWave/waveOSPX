import { ICON_SIZE_MAP } from "@/constants/icons";

export type IconSize = keyof typeof ICON_SIZE_MAP;
export type IconExtension = "png" | "svg";

export interface Icon {
  name?: string;
  size?: IconSize;
  extension?: IconExtension;
  height?: number;
  width?: number;
  alt?: string;
  src?: string;
}
