import { useMode } from "@/features/mode/hooks";

const ModeSwitcher = () => {
  const { mode, toggleMode } = useMode();

  // biome-ignore lint/a11y/useButtonType: <explanation>
  return <button onClick={() => toggleMode()}>{mode}</button>;
};

export default ModeSwitcher;
