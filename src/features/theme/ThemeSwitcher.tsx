import { switchToNextTheme } from "@/features/theme/themeSlice";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const ThemeSwitcher = () => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  return <button onClick={() => switchToNextTheme()}>{theme}</button>;
};

export default ThemeSwitcher;
