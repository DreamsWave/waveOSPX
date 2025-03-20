// src/components/system/Debug/index.tsx
import DebugMenu from "@/components/page/Debug/DebugMenu";
import { getDebugTools } from "@/components/page/Debug/DebugToolRegistry";
import { StyledDebug, StyledDebugButton } from "@/components/page/Debug/styles";
import useDebug from "@/hooks/useDebug";
import { useHotkeys } from "react-hotkeys-hook";

const Debug = () => {
  const { enabled, isDebugMenuVisible, toggleDebugMenu, toggleDebug } =
    useDebug();

  // Hotkeys: Shift + D to toggle debug mode (enables/disables debug tools)
  useHotkeys(
    "shift+d",
    () => {
      if (!enabled) {
        toggleDebug();
        toggleDebugMenu();
      } else {
        toggleDebugMenu();
      }
    },
    { enabled: true },
    [enabled, toggleDebug, toggleDebugMenu]
  );

  const tools = getDebugTools();

  if (!enabled) return null;

  return (
    <StyledDebug>
      <StyledDebugButton onClick={toggleDebugMenu}>D</StyledDebugButton>
      <DebugMenu isVisible={isDebugMenuVisible} tools={tools} />
    </StyledDebug>
  );
};

export default Debug;
