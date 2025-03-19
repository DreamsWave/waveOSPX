import ToggleButton from "@/components/Debug/ToggleButton";
import useSettings from "@/hooks/useSettings";
import { ThemeName } from "@/styles/themes";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useSettings();
  const nextTheme: ThemeName =
    theme === "darkTheme" ? "lightTheme" : "darkTheme";
  return (
    <ToggleButton
      label="theme"
      value={theme === "darkTheme"}
      onToggle={() => setTheme(nextTheme)}
      valueLabels={["light", "dark"]}
    />
  );
};

export default ThemeToggleButton;
