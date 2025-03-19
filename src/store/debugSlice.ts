import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DebugState {
  enabled: boolean;
  pixelGrid: {
    enabled: boolean;
    cellSize: number;
  };
  isDebugMenuVisible: boolean;
}

const initialState: DebugState = {
  enabled: import.meta.env.DEV,
  pixelGrid: {
    enabled: false,
    cellSize: 2,
  },
  isDebugMenuVisible: false,
};

const debugSlice = createSlice({
  name: "debug",
  initialState,
  reducers: {
    toggleDebug: (state) => {
      state.enabled = !state.enabled;
    },
    togglePixelGrid: (state) => {
      state.pixelGrid.enabled = !state.pixelGrid.enabled;
    },
    setPixelGridCellSize: (state, action: PayloadAction<number>) => {
      state.pixelGrid.cellSize = action.payload;
    },
    toggleDebugMenu: (state) => {
      state.isDebugMenuVisible = !state.isDebugMenuVisible;
    },
  },
});

export const {
  toggleDebug,
  togglePixelGrid,
  toggleDebugMenu,
  setPixelGridCellSize,
} = debugSlice.actions;
export default debugSlice.reducer;
