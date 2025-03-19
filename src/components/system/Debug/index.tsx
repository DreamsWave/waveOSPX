import DebugMenu from "@/components/system/Debug/DebugMenu";
import { getDebugTools } from "@/components/system/Debug/DebugToolRegistry";
import {
  StyledDebug,
  StyledDebugButton,
} from "@/components/system/Debug/styles";
import useDebug from "@/hooks/useDebug";

const Debug = () => {
  const { enabled, isDebugMenuVisible, toggleDebugMenu } = useDebug();
  const tools = getDebugTools();

  return (
    <StyledDebug $isVisible={enabled}>
      <StyledDebugButton onClick={toggleDebugMenu}>D</StyledDebugButton>
      <DebugMenu isVisible={isDebugMenuVisible} tools={tools} />
    </StyledDebug>
  );
};

export default Debug;
