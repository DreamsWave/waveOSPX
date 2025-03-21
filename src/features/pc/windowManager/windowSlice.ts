import { Window } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WindowState {
  windows: Window[];
}

const initialState: WindowState = {
  windows: [],
};

const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    addWindow: (state, action: PayloadAction<Window>) => {
      const newWindow: Window = action.payload;
      state = { ...state, windows: [...state.windows, newWindow] };
    },
    removeWindow: (state, action: PayloadAction<string>) => {
      state = {
        ...state,
        windows: state.windows.filter((window) => window.id !== action.payload),
      };
    },
    updateWindow: (state, action: PayloadAction<Window>) => {
      const updatedWindow: Window = action.payload;
      state = {
        ...state,
        windows: state.windows.map((window) =>
          window.id === updatedWindow.id ? updatedWindow : window
        ),
      };
    },
    minimizeWindow: (state, action: PayloadAction<string>) => {
      state = {
        ...state,
        windows: state.windows.map((window) =>
          window.id === action.payload
            ? { ...window, isMinimized: true }
            : window
        ),
      };
    },
    maximizeWindow: (state, action: PayloadAction<string>) => {
      state = {
        ...state,
        windows: state.windows.map((window) =>
          window.id === action.payload
            ? { ...window, isMaximized: true }
            : window
        ),
      };
    },
    restoreWindow: (state, action: PayloadAction<string>) => {
      state = {
        ...state,
        windows: state.windows.map((window) =>
          window.id === action.payload
            ? { ...window, isMinimized: false, isMaximized: false }
            : window
        ),
      };
    },
  },
});

export const {
  addWindow,
  removeWindow,
  updateWindow,
  minimizeWindow,
  maximizeWindow,
  restoreWindow,
} = windowSlice.actions;
export default windowSlice.reducer;
