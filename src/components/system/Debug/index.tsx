import DebugMenu from "@/components/system/Debug/DebugMenu";
import FocusToggleButton from "@/components/system/Debug/DebugMenuItems/FocusToggleButton";
import PixelGrid from "@/components/system/Debug/DebugMenuItems/PixelGrid";
import ReducedMotionToggleButton from "@/components/system/Debug/DebugMenuItems/ReducedMotionToggleButton";
import ThemeToggleButton from "@/components/system/Debug/DebugMenuItems/ThemeToggleButton";
import {
  StyledDebug,
  StyledDebugButton,
} from "@/components/system/Debug/styles";
import { DebugTool } from "@/components/system/Debug/types";
import useDebug from "@/hooks/useDebug";

const tools: DebugTool[] = [
  { label: "pixelGrid", component: <PixelGrid /> },
  { label: "theme", component: <ThemeToggleButton /> },
  { label: "focus", component: <FocusToggleButton /> },
  { label: "reducedMotion", component: <ReducedMotionToggleButton /> },
];

const Debug = () => {
  const { enabled, isDebugMenuVisible, toggleDebugMenu } = useDebug();

  return (
    <StyledDebug $isVisible={enabled}>
      <StyledDebugButton onClick={toggleDebugMenu}>D</StyledDebugButton>
      <DebugMenu isVisible={isDebugMenuVisible} tools={tools} />
    </StyledDebug>
  );
};

export default Debug;
