import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  setFocusedProcess,
} from "@/features/pc/process/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import Window from "./window";

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>;
};

const Windows = ({ containerRef }: Props) => {
  const dispatch = useDispatch();
  const processes = useSelector(
    (state: RootState) => state.pc.processes.processes
  );
  const focusedProcessId = useSelector(
    (state: RootState) => state.pc.processes.focusedProcessId
  );

  const handleWindowFocus = (id: string) => {
    dispatch(setFocusedProcess(id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click was on a window or its children
      const target = event.target as HTMLElement;
      const isClickOnWindow = target.closest(".window");

      // If click is not on a window, clear focus
      if (!isClickOnWindow) {
        dispatch(setFocusedProcess(""));
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (container) {
        container.removeEventListener("click", handleClickOutside);
      }
    };
  }, [containerRef, dispatch]);

  return (
    <>
      {Object.values(processes).map((process) => (
        <Window
          key={process.id}
          windowState={process}
          containerRef={containerRef}
          onFocus={handleWindowFocus}
          onMinimize={() => dispatch(minimizeProcess(process.id))}
          onClose={() => dispatch(closeProcess(process.id))}
          onMaximize={() => dispatch(maximizeProcess(process.id))}
          isFocused={process.id === focusedProcessId}
        />
      ))}
    </>
  );
};

export default Windows;
