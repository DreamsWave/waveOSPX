export type ApplicationType = "TextEditor";

export type Window = {
  id: string;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isMinimized: boolean;
  isMaximized: boolean;
  application: ApplicationType;
  data: unknown; // For application-specific state, e.g., TextEditor content
};
