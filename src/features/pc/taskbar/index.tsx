import {
  minimizeProcess,
  setFocusedProcess,
} from "@/features/pc/process/processSlice";
import {
  StyledTaskbar,
  StyledTaskbarAppButtons,
  StyledTaskbarSeparator,
} from "@/features/pc/taskbar/styles";
import SystemTray from "@/features/pc/taskbar/systemTray";
import TaskbarButton from "@/features/pc/taskbar/taskbarButton";
import StartMenuButton from "@/features/pc/taskbar/taskbarButton/StartMenuButton";
import type { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

const Taskbar = () => {
  const dispatch = useDispatch();
  const processes = useSelector(
    (state: RootState) => state.processes.processes
  );
  const focusedProcessId = useSelector(
    (state: RootState) => state.processes.focusedProcessId
  );

  const handleTaskbarClick = (id: string) => {
    const process = processes[id];
    if (!process) return;

    if (process.minimized) {
      dispatch(minimizeProcess(id));
      dispatch(setFocusedProcess(id));
    } else if (process.id === focusedProcessId) {
      // If focused and not minimized, minimize it
      dispatch(minimizeProcess(id));
    } else {
      // If not focused, bring it to the front
      dispatch(setFocusedProcess(id));
    }
  };

  return (
    <StyledTaskbar>
      <StartMenuButton />
      <StyledTaskbarSeparator />
      <StyledTaskbarAppButtons>
        {Object.values(processes).map((process) => (
          <TaskbarButton
            key={process.id}
            isFocused={process.id === focusedProcessId}
            isMinimized={process.minimized || false}
            icon={{
              name: process.icon.name,
              height: process.icon.height,
              width: process.icon.width,
              size: "xs",
            }}
            title={process.title}
            onClick={() => handleTaskbarClick(process.id)}
          />
        ))}
      </StyledTaskbarAppButtons>
      <StyledTaskbarSeparator />
      <SystemTray />
    </StyledTaskbar>
  );
};

export default Taskbar;
