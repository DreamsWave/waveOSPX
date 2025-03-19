import { STORAGE_CAMERA_FOCUSED_KEY } from "@/utils/constants";
import { createSlice } from "@reduxjs/toolkit";

const getInitialIsFocused = (): boolean => {
  try {
    const stored = localStorage.getItem(STORAGE_CAMERA_FOCUSED_KEY);
    return stored !== null ? JSON.parse(stored) : true;
  } catch {
    return true;
  }
};

interface CameraState {
  isFocused: boolean;
}

const initialState: CameraState = {
  isFocused: getInitialIsFocused(),
};

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    toggleFocus: (state) => {
      state.isFocused = !state.isFocused;
      localStorage.setItem(
        STORAGE_CAMERA_FOCUSED_KEY,
        state.isFocused.toString()
      );
    },
  },
});

export const { toggleFocus } = cameraSlice.actions;
export default cameraSlice.reducer;
