import Window from "@/features/pc/windowManager/window";
import {
  minimizeWindow,
  removeWindow,
  setFocusedWindow,
} from "@/features/pc/windowManager/windowSlice";
import { RootState } from "@/store";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StyledWindowManager = styled.div<{ $isVisible: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: ${({ $isVisible }) => ($isVisible ? 10 : -1)};
`;

const WindowManager = () => {
  const dispatch = useDispatch();
  const windows = useSelector((state: RootState) => state.windows.windows);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledWindowManager ref={containerRef} $isVisible={!!windows.length}>
      {windows.map((window) => (
        <Window
          key={window.id}
          windowState={window}
          containerRef={containerRef}
          onFocus={() => dispatch(setFocusedWindow(window.id))}
          onMinimize={() => dispatch(minimizeWindow(window.id))}
          onClose={() => dispatch(removeWindow(window.id))}
        />
      ))}
    </StyledWindowManager>
  );
};

export default WindowManager;
