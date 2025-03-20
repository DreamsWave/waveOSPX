// src/components/system/Debug/index.tsx
import DebugMenu from "@/components/page/Debug/DebugMenu";
import { getDebugTools } from "@/components/page/Debug/DebugToolRegistry";
import { StyledDebug, StyledDebugButton } from "@/components/page/Debug/styles";
import useDebug from "@/hooks/useDebug";
import { useHotkeys } from "react-hotkeys-hook";

const Debug = () => {
  const { enabled, isDebugMenuVisible, toggleDebugMenu } = useDebug();

  // Hotkeys: Shift + D to toggle debug mode
  useHotkeys("shift+d", toggleDebugMenu);

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
