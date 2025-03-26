import { toggleMode } from "@/features/mode/modeSlice";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";

const ModeSwitcher = () => {
  const currentMode = useSelector((state: RootState) => state.mode.currentMode);

  // biome-ignore lint/a11y/useButtonType: <explanation>
  return <button onClick={() => toggleMode()}>{currentMode}</button>;
};

export default ModeSwitcher;
