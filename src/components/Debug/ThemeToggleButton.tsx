import StyledDebugButton from "@/components/Debug/StyledDebugButton";
import { useThemeContext } from "@/hooks/useThemeContext";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <StyledDebugButton
      onClick={() =>
        setTheme(theme === "darkTheme" ? "lightTheme" : "darkTheme")
      }
    >
      T: {theme === "darkTheme" ? "D" : "L"}
    </StyledDebugButton>
  );
};

export default ThemeToggleButton;
