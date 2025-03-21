import { toggleMode } from "@/features/mode/modeSlice";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const ModeSwitcher = () => {
  const currentMode = useSelector((state: RootState) => state.mode.currentMode);

  return <button onClick={() => toggleMode()}>{currentMode}</button>;
};

export default ModeSwitcher;
