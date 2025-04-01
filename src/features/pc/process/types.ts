import type { Icon } from "@/types/icons";

export interface Process {
  id: string;
  url?: string;
  minimized?: boolean;
  maximized?: boolean;
  position?: { x: number; y: number };
  size?: { width: number; height: number };
  backgroundColor?: string;
  defaultSize?: { width: number; height: number };
  icon: Icon;
  singleton?: boolean;
  title: string;
  allowResizing?: boolean;
  lockAspectRatio?: boolean;
  zIndex: number;
}
