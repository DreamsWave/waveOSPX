import { RootState } from "@/store";
import { createSelector } from "reselect";

const selectDebug = (state: RootState) => state.debug;
const selectSettings = (state: RootState) => state.settings;
const selectCamera = (state: RootState) => state.camera;

export const selectDebugEnabled = createSelector(
  [selectDebug],
  (debug) => debug.enabled
);
export const selectPixelGrid = createSelector(
  [selectDebug],
  (debug) => debug.pixelGrid
);
export const selectIsDebugMenuVisible = createSelector(
  [selectDebug],
  (debug) => debug.isDebugMenuVisible
);

export const selectReducedMotion = createSelector(
  [selectSettings],
  (settings) => settings.reducedMotion
);
export const selectTheme = createSelector(
  [selectSettings],
  (settings) => settings.theme
);

export const selectIsFocused = createSelector(
  [selectCamera],
  (camera) => camera.isFocused
);
