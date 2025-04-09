import { toggleMode } from "@/features/mode/slice";
import { hideSettings } from "@/features/settings/slice";
import type { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export const useMode = () => {
  const dispatch = useDispatch();
  const currentMode = useSelector((state: RootState) => state.mode.currentMode);
  const isSettingsVisible = useSelector(
    (state: RootState) => state.settings.visible
  );

  function toggleModeFn() {
    // If settings are open, close them first
    if (isSettingsVisible) {
      dispatch(hideSettings());
    }
    // Then toggle mode
    dispatch(toggleMode());
  }

  return {
    mode: currentMode,
    isPCMode: currentMode === "pc",
    isPhoneMode: currentMode === "phone",
    toggleMode: toggleModeFn,
  };
};
