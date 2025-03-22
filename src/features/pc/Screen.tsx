import Desktop from "@/features/pc/desktop";
import { StyledDesktopView, StyledScreen } from "@/features/pc/styles";
import Taskbar from "@/features/pc/taskbar";
import WindowManager from "@/features/pc/windowManager/WindowManager";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const Screen = () => {
  const { currentMode } = useSelector((state: RootState) => state.mode);
  return (
    <StyledScreen $isFocused={currentMode === "pc"}>
      <StyledDesktopView>
        <Desktop />
        <WindowManager />
      </StyledDesktopView>
      <Taskbar />
    </StyledScreen>
  );
};

export default Screen;
