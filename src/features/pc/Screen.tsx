import Desktop from "@/features/pc/desktop";
import StartMenu from "@/features/pc/startMenu";
import { StyledScreen } from "@/features/pc/styles";
import Taskbar from "@/features/pc/taskbar";
import Windows from "@/features/pc/windows";
import type { RootState } from "@/store";
import { useRef } from "react";
import { useSelector } from "react-redux";

export const Screen = () => {
  const { currentMode } = useSelector((state: RootState) => state.mode);
  const screenRef = useRef<HTMLDivElement | null>(null);
  return (
    <StyledScreen ref={screenRef} $isFocused={currentMode === "pc"}>
      <Desktop />
      <Taskbar />
      <StartMenu />
      <Windows containerRef={screenRef} />
    </StyledScreen>
  );
};

export default Screen;
