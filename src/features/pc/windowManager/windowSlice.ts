import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WindowState {
  id: string;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isMinimized: boolean;
  isMaximized: boolean;
  application: "textEditor" | "musicPlayer";
  processId?: string;
  icon?: string;
}

interface WindowsState {
  windows: WindowState[];
  focusedWindowId: string | null;
}

const initialState: WindowsState = {
  windows: [],
  focusedWindowId: null,
};

const windowSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    addWindow: (state, action: PayloadAction<WindowState>) => {
      state.windows.push(action.payload);
      state.focusedWindowId = action.payload.id;
    },
    setFocusedWindow: (state, action: PayloadAction<string>) => {
      state.focusedWindowId = action.payload;
    },
    minimizeWindow: (state, action: PayloadAction<string>) => {
      const window = state.windows.find((w) => w.id === action.payload);
      if (window) window.isMinimized = true;
    },
    maximizeWindow: (state, action: PayloadAction<string>) => {
      const window = state.windows.find((w) => w.id === action.payload);
      if (window) window.isMaximized = !window.isMaximized;
    },
    updateWindowPosition: (
      state,
      action: PayloadAction<{ id: string; x: number; y: number }>
    ) => {
      const window = state.windows.find((w) => w.id === action.payload.id);
      if (window)
        window.position = { x: action.payload.x, y: action.payload.y };
    },
    updateWindowSize: (
      state,
      action: PayloadAction<{ id: string; width: number; height: number }>
    ) => {
      const window = state.windows.find((w) => w.id === action.payload.id);
      if (window)
        window.size = {
          width: action.payload.width,
          height: action.payload.height,
        };
    },
    removeWindow: (state, action: PayloadAction<string>) => {
      state.windows = state.windows.filter((w) => w.id !== action.payload);
      if (state.focusedWindowId === action.payload)
        state.focusedWindowId = null;
    },
  },
});

export const {
  addWindow,
  setFocusedWindow,
  minimizeWindow,
  maximizeWindow,
  updateWindowPosition,
  updateWindowSize,
  removeWindow,
} = windowSlice.actions;
export default windowSlice.reducer;
