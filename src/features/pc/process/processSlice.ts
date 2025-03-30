import type { Icon } from "@/types/icons";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { processDirectory } from "./directory";

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

interface ProcessesState {
  processes: Record<string, Process>;
  focusedProcessId: string | null;
  autoMaximizeInFullscreen: boolean;
}

const initialState: ProcessesState = {
  processes: {},
  focusedProcessId: null,
  autoMaximizeInFullscreen: true,
};

const generatePid = (
  id: string,
  url: string | undefined,
  processes: Record<string, Process>
) => {
  const basePid = url ? `${id}__${url}` : id;
  let pid = basePid;
  let counter = 0;
  while (processes[pid]) {
    counter++;
    pid = `${basePid}__${counter}`;
  }
  return pid;
};

const processSlice = createSlice({
  name: "processes",
  initialState,
  reducers: {
    openProcess: (
      state,
      action: PayloadAction<{ id: string; url?: string }>
    ) => {
      const { id, url } = action.payload;
      const definition = processDirectory[id];
      if (!definition) return;

      if (definition.singleton) {
        const existingPid = Object.keys(state.processes).find((p) =>
          p.startsWith(id)
        );
        if (existingPid) {
          state.processes[existingPid].url = url;
          state.focusedProcessId = existingPid;
          // Update zIndex for existing process
          for (const process of Object.values(state.processes)) {
            if (process.id === existingPid) process.zIndex = 1000;
            else if (process.zIndex > 0) process.zIndex -= 1;
          }
          return;
        }
      }

      const pid = generatePid(id, url, state.processes);

      // Calculate initial position based on last focused window or find a free spot
      let initialPosition = { x: 100, y: 100 }; // Default position
      const offset = 30; // Offset in pixels
      const windowWidth = definition.defaultSize?.width || 500;
      const windowHeight = definition.defaultSize?.height || 400;
      const screenWidth = 1020; // From baseTheme.ts
      const screenHeight = 768; // From baseTheme.ts

      // Get all existing window positions with their IDs
      const existingWindows = Object.values(state.processes)
        .filter((p) => p.position)
        .map((p) => ({
          id: p.id,
          position: p.position as { x: number; y: number },
          size: p.size || { width: 500, height: 400 },
        }));

      // Find the rightmost and bottommost window positions
      const rightmostX = Math.max(
        100,
        ...existingWindows.map((w) => w.position.x)
      );
      const bottommostY = Math.max(
        100,
        ...existingWindows.map((w) => w.position.y)
      );

      // Calculate new position with offset
      let newX = rightmostX + offset;
      let newY = bottommostY + offset;

      // If the new position would go off screen, start a new row from the left
      if (newX + windowWidth > screenWidth) {
        newX = 100; // Reset to left side
        newY = bottommostY + offset; // Move down one row
      }

      // If the new position would go off screen vertically, start from the top
      if (newY + windowHeight > screenHeight) {
        newX = 100; // Reset to left side
        newY = 100; // Reset to top
      }

      // Check if this position would overlap with any existing window
      const wouldOverlap = existingWindows.some((window) => {
        return (
          newX < window.position.x + window.size.width &&
          newX + windowWidth > window.position.x &&
          newY < window.position.y + window.size.height &&
          newY + windowHeight > window.position.y
        );
      });

      // If there would be an overlap, try to find a free spot
      if (wouldOverlap) {
        let found = false;
        for (
          let startY = 100;
          startY < screenHeight - windowHeight && !found;
          startY += offset
        ) {
          for (
            let startX = 100;
            startX < screenWidth - windowWidth && !found;
            startX += offset
          ) {
            const isOverlapping = existingWindows.some((window) => {
              return (
                startX < window.position.x + window.size.width &&
                startX + windowWidth > window.position.x &&
                startY < window.position.y + window.size.height &&
                startY + windowHeight > window.position.y
              );
            });

            if (!isOverlapping) {
              newX = startX;
              newY = startY;
              found = true;
              break;
            }
          }
        }
      }

      initialPosition = { x: newX, y: newY };

      // Check if we should auto-maximize in fullscreen
      const shouldMaximize =
        state.autoMaximizeInFullscreen &&
        typeof window !== "undefined" &&
        // Only detect fullscreen if in true fullscreen or on mobile
        (document.fullscreenElement !== null ||
          /Mobi|Android/i.test(navigator.userAgent) ||
          // Detect explicit mobile width, avoid ambiguous desktop sizes
          window.innerWidth < 768);

      state.processes[pid] = {
        id: pid,
        url,
        position: initialPosition,
        size: definition.defaultSize,
        backgroundColor: definition.backgroundColor,
        defaultSize: definition.defaultSize,
        icon: definition.icon,
        singleton: definition.singleton,
        title: definition.title,
        allowResizing: definition.allowResizing,
        lockAspectRatio: definition.lockAspectRatio,
        zIndex: 1000,
        maximized: shouldMaximize,
      };
      state.focusedProcessId = pid;
      // Ensure other processes' zIndex is lower
      for (const process of Object.values(state.processes)) {
        if (process.id !== pid && process.zIndex >= 1000) process.zIndex -= 1;
      }
    },
    closeProcess: (state, action: PayloadAction<string>) => {
      delete state.processes[action.payload];
      if (state.focusedProcessId === action.payload) {
        state.focusedProcessId = Object.keys(state.processes)[0] || null;
        if (state.focusedProcessId) {
          state.processes[state.focusedProcessId].zIndex = 1000;
        }
      }
    },
    minimizeProcess: (state, action: PayloadAction<string>) => {
      const process = state.processes[action.payload];
      if (process) process.minimized = !process.minimized;
    },
    maximizeProcess: (state, action: PayloadAction<string>) => {
      const process = state.processes[action.payload];
      if (process) process.maximized = !process.maximized;
    },
    updateWindowPosition: (
      state,
      action: PayloadAction<{ id: string; x: number; y: number }>
    ) => {
      const process = state.processes[action.payload.id];
      if (process)
        process.position = { x: action.payload.x, y: action.payload.y };
    },
    updateWindowSize: (
      state,
      action: PayloadAction<{ id: string; width: number; height: number }>
    ) => {
      const process = state.processes[action.payload.id];
      if (process)
        process.size = {
          width: action.payload.width,
          height: action.payload.height,
        };
    },
    setFocusedProcess: (state, action: PayloadAction<string>) => {
      const newFocusedId = action.payload;
      state.focusedProcessId = newFocusedId;

      // If clearing focus (empty string), keep the last focused window on top
      if (!newFocusedId) {
        // Find the last focused window
        const lastFocusedWindow = Object.values(state.processes).find(
          (process) => process.id === state.focusedProcessId
        );
        if (lastFocusedWindow) {
          lastFocusedWindow.zIndex = 1000;
        }
        return;
      }

      // For new focus, update z-indices
      for (const process of Object.values(state.processes)) {
        if (process.id === newFocusedId) {
          process.zIndex = 1000;
        } else if (process.zIndex >= 1000) {
          process.zIndex -= 1;
        }
      }
    },
    toggleAutoMaximizeInFullscreen: (state) => {
      state.autoMaximizeInFullscreen = !state.autoMaximizeInFullscreen;
    },
  },
});

export const {
  openProcess,
  closeProcess,
  minimizeProcess,
  maximizeProcess,
  updateWindowPosition,
  updateWindowSize,
  setFocusedProcess,
  toggleAutoMaximizeInFullscreen,
} = processSlice.actions;
export default processSlice.reducer;
