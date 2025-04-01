import { switchToNextTheme } from "@/features/theme/slice";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";

const ThemeSwitcher = () => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  // biome-ignore lint/a11y/useButtonType: <explanation>
  return <button onClick={() => switchToNextTheme()}>{theme}</button>;
};

export default ThemeSwitcher;
