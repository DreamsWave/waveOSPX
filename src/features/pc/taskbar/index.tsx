import {
  minimizeProcess,
  setFocusedProcess,
} from "@/features/pc/process/slice";
import StartMenuButton from "@/features/pc/taskbar/components/StartMenuButton";
import SystemTray from "@/features/pc/taskbar/components/system-tray";
import TaskbarButton from "@/features/pc/taskbar/components/taskbar-button";
import {
  StyledTaskbar,
  StyledTaskbarAppButtons,
} from "@/features/pc/taskbar/styles";
import type { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

const Taskbar = () => {
  const dispatch = useDispatch();
  const processes = useSelector(
    (state: RootState) => state.pc.processes.processes
  );
  const focusedProcessId = useSelector(
    (state: RootState) => state.pc.processes.focusedProcessId
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
      <SystemTray />
    </StyledTaskbar>
  );
};

export default Taskbar;
