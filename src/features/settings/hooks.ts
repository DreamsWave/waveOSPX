import { toggleReducedMotion } from "@/features/settings/slice";
import { setTheme } from "@/features/theme/slice";
import type { RootState } from "@/store";
import type { ThemeName } from "@/styles/themes";
import { useDispatch, useSelector } from "react-redux";

export const useSettings = () => {
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
