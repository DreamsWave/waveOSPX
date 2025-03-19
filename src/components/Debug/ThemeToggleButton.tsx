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
      theme: {theme === "darkTheme" ? "dark" : "light"}
    </StyledDebugButton>
  );
};

export default ThemeToggleButton;
