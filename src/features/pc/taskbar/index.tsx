import StartMenuButton from "@/features/pc/taskbar/StartMenuButton";
import {
  StyledTaskbar,
  StyledTaskbarAppButtons,
  StyledTaskbarSeparator,
} from "@/features/pc/taskbar/styles";
import SystemTray from "@/features/pc/taskbar/systemTray";
import TaskbarButton from "@/features/pc/taskbar/taskbarButton";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Taskbar = () => {
  const { windows, focusedWindowId } = useSelector(
    (state: RootState) => state.windows
  );
  return (
    <StyledTaskbar>
      <StartMenuButton />
      <StyledTaskbarSeparator />
      <StyledTaskbarAppButtons>
        {windows.map((window) => (
          <TaskbarButton
            key={window.id}
            icon={window.icon}
            label={window.title}
            isActive={window.id === focusedWindowId}
          />
        ))}
      </StyledTaskbarAppButtons>
      <SystemTray />
    </StyledTaskbar>
  );
};

export default Taskbar;
