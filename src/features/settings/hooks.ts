import { toggleMode } from "@/features/mode/slice";
import {
  hideSettings,
  showSettings,
  toggleReducedMotion,
} from "@/features/settings/slice";
import { setTheme } from "@/features/theme/slice";
import type { RootState } from "@/store";
import type { ThemeName } from "@/styles/themes";
import { useDispatch, useSelector } from "react-redux";

export const useSettings = () => {
  const dispatch = useDispatch();
  const { reducedMotion, visible } = useSelector(
    (state: RootState) => state.settings
  );
  const { currentTheme } = useSelector((state: RootState) => state.theme);
  const currentMode = useSelector((state: RootState) => state.mode.currentMode);

  const toggleSettings = () => {
    // If in phone mode, switch to PC mode first
    if (currentMode === "phone") {
      dispatch(toggleMode());
    }
    // Then toggle settings
    dispatch(visible ? hideSettings() : showSettings());
  };

  return {
    reducedMotion,
    theme: currentTheme,
    toggleReducedMotion: () => dispatch(toggleReducedMotion()),
    setTheme: (theme: ThemeName) => dispatch(setTheme(theme)),
    isSettingsVisible: visible,
    showSettings: () => dispatch(showSettings()),
    hideSettings: () => dispatch(hideSettings()),
    toggleSettings,
  };
};
