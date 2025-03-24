import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  icon: string;
  singleton?: boolean;
  title: string;
  allowResizing?: boolean;
  lockAspectRatio?: boolean;
  zIndex: number;
}

interface ProcessesState {
  processes: Record<string, Process>;
  focusedProcessId: string | null;
}

const initialState: ProcessesState = {
  processes: {},
  focusedProcessId: null,
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
          Object.values(state.processes).forEach((p) => {
            if (p.id === existingPid) p.zIndex = 1000;
            else if (p.zIndex > 0) p.zIndex -= 1;
          });
          return;
        }
      }

      const pid = generatePid(id, url, state.processes);
      state.processes[pid] = {
        id: pid,
        url,
        position: { x: 100, y: 100 },
        size: definition.defaultSize,
        backgroundColor: definition.backgroundColor,
        defaultSize: definition.defaultSize,
        icon: definition.icon,
        singleton: definition.singleton,
        title: definition.title,
        allowResizing: definition.allowResizing,
        lockAspectRatio: definition.lockAspectRatio,
        zIndex: 1000,
      };
      state.focusedProcessId = pid;
      // Ensure other processes' zIndex is lower
      Object.values(state.processes).forEach((p) => {
        if (p.id !== pid && p.zIndex >= 1000) p.zIndex -= 1;
      });
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
      Object.values(state.processes).forEach((process) => {
        if (process.id === newFocusedId) {
          process.zIndex = 1000; // Bring to front
        } else if (process.zIndex >= 1000) {
          process.zIndex -= 1; // Push others back
        }
      });
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
} = processSlice.actions;
export default processSlice.reducer;
