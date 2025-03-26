import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  setFocusedProcess,
} from "@/features/pc/process/processSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import Window from "./window";

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>;
};

const Windows = ({ containerRef }: Props) => {
  const dispatch = useDispatch();
  const processes = useSelector(
    (state: RootState) => state.processes.processes
  );
  const focusedProcessId = useSelector(
    (state: RootState) => state.processes.focusedProcessId
  );

  const handleWindowFocus = (id: string) => {
    dispatch(setFocusedProcess(id));
  };

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
