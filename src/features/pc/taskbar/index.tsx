import StartMenuButton from "@/features/pc/taskbar/StartMenuButton";
import {
  StyledTaskbar,
  StyledTaskbarAppButtons,
  StyledTaskbarSeparator,
} from "@/features/pc/taskbar/styles";
import SystemTray from "@/features/pc/taskbar/systemTray";
import TaskbarButton from "@/features/pc/taskbar/taskbarButton";
import {
  minimizeWindow,
  setFocusedWindow,
  updateWindowPosition,
  updateWindowSize,
  WindowState,
} from "@/features/pc/windowManager/windowSlice";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

const Taskbar = () => {
  const dispatch = useDispatch();
  const { windows, focusedWindowId } = useSelector(
    (state: RootState) => state.windows
  );

  const handleMinimizeWindow = (windowState: WindowState) => {
    dispatch(minimizeWindow(windowState.id));
    dispatch(updateWindowSize({ id: windowState.id, height: 0, width: 0 }));
    dispatch(updateWindowPosition({ id: windowState.id, x: 0, y: 0 }));
    setAvailableFocus();
  };

  const handleUnMinimizeWindow = (windowState: WindowState) => {
    dispatch(
      updateWindowSize({
        id: windowState.id,
        width: windowState.size.width,
        height: windowState.size.height,
      })
    );
    dispatch(
      updateWindowPosition({
        id: windowState.id,
        x: windowState.position.x,
        y: windowState.position.y,
      })
    );
    dispatch(setFocusedWindow(windowState.id));
  };

  const setAvailableFocus = () => {
    const notMinimizedWindows = windows.filter((w) => !w.isMinimized);
    if (notMinimizedWindows.length) {
      dispatch(
        setFocusedWindow(notMinimizedWindows[notMinimizedWindows.length - 1].id)
      );
    }
  };

  // implement
  const handleClick = (windowState: WindowState) => {
    if (windowState.isMinimized) {
      handleMinimizeWindow(windowState);
    } else {
      handleUnMinimizeWindow(windowState);
    }
  };

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
            onClick={() => handleClick(window)}
          />
        ))}
      </StyledTaskbarAppButtons>
      <SystemTray />
    </StyledTaskbar>
  );
};

export default Taskbar;
