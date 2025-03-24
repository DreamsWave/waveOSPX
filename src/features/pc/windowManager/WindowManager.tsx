import Window from "@/features/pc/windowManager/window";
import {
  maximizeWindow,
  minimizeWindow,
  removeWindow,
  setFocusedWindow,
  updateWindowPosition,
  updateWindowSize,
} from "@/features/pc/windowManager/windowSlice";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>;
};

const WindowManager = ({ containerRef }: Props) => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state: RootState) => state.windows);

  const handleWindowFocus = (windowId: string) => {
    dispatch(setFocusedWindow(windowId));
  };

  const handleWindowMinimize = (windowId: string) => {
    dispatch(minimizeWindow(windowId));
    dispatch(updateWindowSize({ id: windowId, height: 0, width: 0 }));
    dispatch(updateWindowPosition({ id: windowId, x: 0, y: 0 }));
    setAvailableFocus();
  };

  const handleWindowClose = (windowId: string) => {
    dispatch(removeWindow(windowId));
  };

  const handleWindowMaximize = (windowId: string) => {
    dispatch(maximizeWindow(windowId));
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      dispatch(updateWindowSize({ id: windowId, width, height }));
      dispatch(updateWindowPosition({ id: windowId, x: 0, y: 0 }));
    }
  };

  const setAvailableFocus = () => {
    const notMinimizedWindows = windows.filter((w) => !w.isMinimized);
    if (notMinimizedWindows.length) {
      dispatch(
        setFocusedWindow(notMinimizedWindows[notMinimizedWindows.length - 1].id)
      );
    }
  };

  return (
    <>
      {windows.map((window) => (
        <Window
          key={window.id}
          windowState={window}
          containerRef={containerRef}
          onFocus={handleWindowFocus}
          onMinimize={handleWindowMinimize}
          onClose={handleWindowClose}
          onMaximize={handleWindowMaximize}
        />
      ))}
    </>
  );
};

export default WindowManager;
