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
    Component: lazy(
      () => import("@/features/pc/applications/musicPlayer/MusicPlayer")
    ),
    backgroundColor: "#000",
    defaultSize: { width: 800, height: 500 },
    icon: {
      name: "music-player",
    },
    singleton: true,
    title: "Music Player",
  },
  textEditor: {
    Component: lazy(
      () => import("@/features/pc/applications/textEditor/TextEditor")
    ),
    backgroundColor: "#000",
    defaultSize: { width: 800, height: 500 },
    icon: { name: "text-editor" },
    title: "Text Editor",
  },
  settings: {
    Component: lazy(
      () => import("@/features/pc/applications/settings/Settings")
    ),
    backgroundColor: "#000",
    defaultSize: { width: 800, height: 500 },
    icon: {
      name: "settings",
    },
    singleton: true,
    title: "Settings",
  },
};
