import { getColor } from "@/styles/colorUtils";
import type { Icon } from "@/types/icons";
import { lazy } from "react";

type WindowProps = {
  windowId: string;
  [key: string]: unknown;
};

export type ProcessDefinition = {
  Component: React.LazyExoticComponent<React.ComponentType<WindowProps>>;
  backgroundColor?: string;
  defaultSize?: { width: number; height: number };
  icon: Icon;
  libs?: string[];
  dependantLibs?: string[];
  lockAspectRatio?: boolean;
  singleton?: boolean;
  title: string;
  allowResizing?: boolean;
};

export const processDirectory: Record<string, ProcessDefinition> = {
  musicPlayer: {
    Component: lazy(() => import("@/features/pc/applications/MusicPlayer")),
    backgroundColor: getColor("Gray", 6),
    defaultSize: { width: 800, height: 500 },
    icon: {
      name: "music-player",
    },
    singleton: true,
    title: "Music Player",
  },
  textEditor: {
    Component: lazy(() => import("@/features/pc/applications/TextEditor")),
    backgroundColor: getColor("Gray", 6),
    defaultSize: { width: 800, height: 500 },
    icon: { name: "text-editor" },
    title: "Text Editor",
  },
  settings: {
    Component: lazy(() => import("@/features/pc/applications/Settings")),
    backgroundColor: getColor("Gray", 6),
    defaultSize: { width: 500, height: 500 },
    icon: {
      name: "settings",
    },
    singleton: true,
    title: "Settings",
  },
  changelog: {
    Component: lazy(() => import("@/features/pc/applications/Changelog")),
    backgroundColor: getColor("Gray", 6),
    defaultSize: { width: 800, height: 500 },
    icon: { name: "changelog" },
    singleton: true,
    title: "Changelog",
  },
};
