import { selectReducedMotion, selectTheme } from "@/store/selectors";
import { setTheme, toggleReducedMotion } from "@/store/settingsSlice";
import { ThemeName } from "@/styles/themes";
import { useDispatch, useSelector } from "react-redux";

const useSettings = () => {
  const dispatch = useDispatch();
  const reducedMotion = useSelector(selectReducedMotion);
  const theme = useSelector(selectTheme);

  return {
    reducedMotion,
    theme,
    toggleReducedMotion: () => dispatch(toggleReducedMotion()),
    setTheme: (newTheme: ThemeName) => dispatch(setTheme(newTheme)),
  };
};

export default useSettings;
