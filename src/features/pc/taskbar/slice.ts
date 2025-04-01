import { createSlice } from "@reduxjs/toolkit";

export interface TaskbarState {
  startMenu: {
    isOpen: boolean;
  };
  // We can add more taskbar-related state here later
  // For example:
  // activeApps: string[];
  // systemTray: {
  //   icons: string[];
  //   notifications: number;
  // };
}

const initialState: TaskbarState = {
  startMenu: {
    isOpen: false,
  },
};

const taskbarSlice = createSlice({
  name: "taskbar",
  initialState,
  reducers: {
    toggleStartMenu: (state) => {
      state.startMenu.isOpen = !state.startMenu.isOpen;
    },
    closeStartMenu: (state) => {
      state.startMenu.isOpen = false;
    },
    openStartMenu: (state) => {
      state.startMenu.isOpen = true;
    },
  },
});

export const { toggleStartMenu, closeStartMenu, openStartMenu } =
  taskbarSlice.actions;
export default taskbarSlice.reducer;
