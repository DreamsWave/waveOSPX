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
    defaultSize: { width: 500, height: 400 },
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
    defaultSize: { width: 500, height: 400 },
    icon: { name: "text-editor" },
    title: "Text Editor",
  },
};
