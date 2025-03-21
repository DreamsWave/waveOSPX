import { createSlice } from "@reduxjs/toolkit";

export type Mode = "pc" | "phone";

interface ModeState {
  currentMode: Mode;
}

const initialState: ModeState = {
  currentMode: "pc",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.currentMode = state.currentMode === "pc" ? "phone" : "pc";
    },
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
