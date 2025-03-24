import { lazy } from "react";

export type ProcessDefinition = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.LazyExoticComponent<React.FC<any>>;
  backgroundColor?: string;
  defaultSize?: { width: number; height: number };
  icon: string;
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
    icon: "/assets/pc/icons/apps/music-player.png",
    singleton: true,
    title: "Music Player",
  },
  textEditor: {
    Component: lazy(
      () => import("@/features/pc/applications/textEditor/TextEditor")
    ),
    backgroundColor: "#000",
    defaultSize: { width: 500, height: 400 },
    icon: "/assets/pc/icons/apps/text-editor.png",
    title: "Text Editor",
  },
};
