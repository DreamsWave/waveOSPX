import { togglePixelGrid } from "@/features/debug/debugSlice";
import {
  StyledDebugMenu,
  StyledDebugMenuButton,
  StyledDebugMenuItem,
} from "@/features/debug/styles";
import { toggleMode } from "@/features/mode/modeSlice";
import { launchApplication } from "@/features/pc/process/functions";
import { toggleReducedMotion } from "@/features/settings/settingsSlice";
import { switchToNextTheme } from "@/features/theme/themeSlice";
import { type RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";

const DebugMenu = () => {
  const dispatch = useAppDispatch();
  const debug = useSelector((state: RootState) => state.debug);
  const theme = useSelector((state: RootState) => state.theme);
  const mode = useSelector((state: RootState) => state.mode);
  const settings = useSelector((state: RootState) => state.settings);

  if (!debug.enabled || !debug.isDebugMenuVisible) return null;

  return (
    <StyledDebugMenu>
      <StyledDebugMenuItem>
        <StyledDebugMenuButton onClick={() => dispatch(togglePixelGrid())}>
          pixelGrid: {debug.pixelGrid.enabled ? "on" : "off"}
        </StyledDebugMenuButton>
      </StyledDebugMenuItem>
      <StyledDebugMenuItem>
        <StyledDebugMenuButton onClick={() => dispatch(switchToNextTheme())}>
          theme: {theme.currentTheme}
        </StyledDebugMenuButton>
      </StyledDebugMenuItem>
      <StyledDebugMenuItem>
        <StyledDebugMenuButton onClick={() => dispatch(toggleMode())}>
          mode: {mode.currentMode}
        </StyledDebugMenuButton>
      </StyledDebugMenuItem>
      <StyledDebugMenuItem>
        <StyledDebugMenuButton onClick={() => dispatch(toggleReducedMotion())}>
          reducedMotion: {String(settings.reducedMotion)}
        </StyledDebugMenuButton>
      </StyledDebugMenuItem>
      <StyledDebugMenuItem>
        <StyledDebugMenuButton
          onClick={() => dispatch(launchApplication("musicPlayer"))}
        >
          open window
        </StyledDebugMenuButton>
      </StyledDebugMenuItem>
    </StyledDebugMenu>
  );
};

export default DebugMenu;
