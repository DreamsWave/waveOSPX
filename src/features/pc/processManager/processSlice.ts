import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProcessType = "musicPlayer";

export interface ProcessState {
  id: string;
  type: ProcessType;
  state: "running" | "paused" | "stopped";
  data: {
    currentTrack?: string;
    position?: number;
  };
}

interface ProcessesState {
  processes: ProcessState[];
}

const initialState: ProcessesState = {
  processes: [],
};

const processSlice = createSlice({
  name: "processes",
  initialState,
  reducers: {
    startProcess: (
      state,
      action: PayloadAction<{ id: string; type: ProcessType; track?: string }>
    ) => {
      state.processes.push({
        id: action.payload.id,
        type: action.payload.type,
        state: "running",
        data: { currentTrack: action.payload.track, position: 0 },
      });
    },
    updateProcessState: (
      state,
      action: PayloadAction<{ id: string; state: ProcessState["state"] }>
    ) => {
      const process = state.processes.find((p) => p.id === action.payload.id);
      if (process) process.state = action.payload.state;
    },
    updateProcessData: (
      state,
      action: PayloadAction<{ id: string; data: Partial<ProcessState["data"]> }>
    ) => {
      const process = state.processes.find((p) => p.id === action.payload.id);
      if (process) process.data = { ...process.data, ...action.payload.data };
    },
    stopProcess: (state, action: PayloadAction<string>) => {
      state.processes = state.processes.filter((p) => p.id !== action.payload);
    },
  },
});

export const {
  startProcess,
  updateProcessState,
  updateProcessData,
  stopProcess,
} = processSlice.actions;
export default processSlice.reducer;
