import type { T9Key } from "@/features/phone/keypad/constants";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TextInputState {
  text: string[];
  cursorPosition: number;
  lastInsertPosition: number;
  activeKey: T9Key | null;
  charCycleCount: number;
}

const initialState: TextInputState = {
  text: [],
  cursorPosition: 0,
  lastInsertPosition: 0,
  activeKey: null,
  charCycleCount: 0,
};

const textInputSlice = createSlice({
  name: "textInput",
  initialState,
  reducers: {
    insert: (
      state,
      action: PayloadAction<{ char: string; key: T9Key; charIndex: number }>
    ) => {
      const { char, key, charIndex } = action.payload;
      const isCycling =
        state.activeKey === key &&
        state.cursorPosition === state.lastInsertPosition + 1;

      if (isCycling && state.text.length > 0) {
        state.text[state.lastInsertPosition] = char;
        state.activeKey = key;
        state.charCycleCount = charIndex;
        return;
      }

      state.text.splice(state.cursorPosition, 0, char);
      state.cursorPosition += 1;
      state.lastInsertPosition = state.cursorPosition - 1;
      state.activeKey = key;
      state.charCycleCount = charIndex;
    },
    backspace: (state) => {
      if (state.cursorPosition <= 0) return;
      state.text.splice(state.cursorPosition - 1, 1);
      state.cursorPosition -= 1;
      state.lastInsertPosition = Math.max(0, state.lastInsertPosition - 1);
      state.activeKey = null;
      state.charCycleCount = 0;
    },
    moveLeft: (state) => {
      state.cursorPosition = Math.max(0, state.cursorPosition - 1);
    },
    moveRight: (state) => {
      state.cursorPosition = Math.min(
        state.text.length,
        state.cursorPosition + 1
      );
    },
    resetTimeout: (state) => {
      state.activeKey = null;
      state.charCycleCount = 0;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload.split("");
      state.cursorPosition = action.payload.length;
      state.lastInsertPosition = 0;
      state.activeKey = null;
      state.charCycleCount = 0;
    },
    setCursorPosition: (state, action: PayloadAction<number>) => {
      state.cursorPosition = Math.max(
        0,
        Math.min(state.text.length, action.payload)
      );
    },
  },
});

export const {
  insert,
  backspace,
  moveLeft,
  moveRight,
  resetTimeout,
  setText,
  setCursorPosition,
} = textInputSlice.actions;

export default textInputSlice.reducer;
