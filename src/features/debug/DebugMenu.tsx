import { togglePixelGrid } from "@/features/debug/debugSlice";
import {
  StyledDebugMenu,
  StyledDebugMenuButton,
  StyledDebugMenuItem,
} from "@/features/debug/styles";
import { toggleMode } from "@/features/mode/modeSlice";
import { toggleReducedMotion } from "@/features/settings/settingsSlice";
import { switchToNextTheme } from "@/features/theme/themeSlice";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

const DebugMenu = () => {
  const dispatch = useDispatch();
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
    </StyledDebugMenu>
  );
};

export default DebugMenu;

// import { StyledDebugMenu, StyledDebugMenuItem } from "@/features/debug/styles";
// import { DebugTool } from "@/features/debug/types";

// const DebugMenu = ({
//   tools,
//   isVisible,
// }: {
//   tools: DebugTool[];
//   isVisible: boolean;
// }) => {
//   if (!isVisible) return null;
//   return (
//     <StyledDebugMenu>
//       {tools.map((tool) => (
//         <StyledDebugMenuItem key={tool.label}>
//           {tool.component}
//         </StyledDebugMenuItem>
//       ))}
//     </StyledDebugMenu>
//   );
// };

// export default DebugMenu;
