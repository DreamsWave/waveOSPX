import Desktop from "@/features/pc/desktop";
import { StyledScreen } from "@/features/pc/styles";
import Taskbar from "@/features/pc/taskbar";
import WindowManager from "@/features/pc/windowManager/WindowManager";
import { RootState } from "@/store";
import { useRef } from "react";
import { useSelector } from "react-redux";

export const Screen = () => {
  const { currentMode } = useSelector((state: RootState) => state.mode);
  const screenRef = useRef<HTMLDivElement | null>(null);
  return (
    <StyledScreen ref={screenRef} $isFocused={currentMode === "pc"}>
      <Desktop />
      <WindowManager containerRef={screenRef} />
      <Taskbar />
    </StyledScreen>
  );
};

export default Screen;
