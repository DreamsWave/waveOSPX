import { toggleMode } from "@/features/mode/slice";
import type { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export const useMode = () => {
  const dispatch = useDispatch();
  const currentMode = useSelector((state: RootState) => state.mode.currentMode);

  function toggleModeFn() {
    dispatch(toggleMode());
  }

  return {
    mode: currentMode,
    isPCMode: currentMode === "pc",
    isPhoneMode: currentMode === "phone",
    toggleMode: toggleModeFn,
  };
};
