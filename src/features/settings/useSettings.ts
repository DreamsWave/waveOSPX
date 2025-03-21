import { toggleReducedMotion } from "@/features/settings/settingsSlice";
import { setTheme } from "@/features/theme/themeSlice";
import { RootState } from "@/store";
import { ThemeName } from "@/styles/themes";
import { useDispatch, useSelector } from "react-redux";

const useSettings = () => {
  const dispatch = useDispatch();
  const { reducedMotion } = useSelector((state: RootState) => state.settings);
  const { currentTheme } = useSelector((state: RootState) => state.theme);

  return {
    reducedMotion,
    theme: currentTheme,
    toggleReducedMotion: () => dispatch(toggleReducedMotion()),
    setTheme: (theme: ThemeName) => dispatch(setTheme(theme)),
  };
};

export default useSettings;
