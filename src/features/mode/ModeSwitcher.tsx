import { useMode } from "@/features/mode/hooks";

const ModeSwitcher = () => {
  const { mode, toggleMode } = useMode();

  return (
    <button type="button" onClick={() => toggleMode()}>
      {mode}
    </button>
  );
};

export default ModeSwitcher;
