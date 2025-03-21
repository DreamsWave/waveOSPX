import MusicPlayer from "@/features/pc/applications/musicPlayer/MusicPlayer";
import { StyledWindow } from "@/features/pc/windowManager/window/styles";
import {
  maximizeWindow,
  updateWindowPosition,
  updateWindowSize,
  WindowState,
} from "@/features/pc/windowManager/windowSlice";
import { RootState } from "@/store";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Rnd,
  type Position,
  type RndDragEvent,
  type RndResizeCallback,
} from "react-rnd";
import Titlebar from "./titlebar";

type Props = {
  windowState: WindowState;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onFocus: () => void;
  onMinimize: () => void;
  onClose: () => void;
};

const Window = memo(
  ({ windowState, containerRef, onFocus, onMinimize, onClose }: Props) => {
    const dispatch = useDispatch();
    const focusedWindowId = useSelector(
      (state: RootState) => state.windows.focusedWindowId
    );
    const isFocused = windowState.id === focusedWindowId;

    const handleDragStop = (_e: RndDragEvent, data: Position) => {
      const { x, y } = data;
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const constrainedX = Math.max(
          0,
          Math.min(x, width - windowState.size.width)
        );
        const constrainedY = Math.max(
          0,
          Math.min(y, height - windowState.size.height)
        );
        dispatch(
          updateWindowPosition({
            id: windowState.id,
            x: constrainedX,
            y: constrainedY,
          })
        );
      }
      onFocus();
    };

    const handleResizeStop: RndResizeCallback = (
      _e,
      _direction,
      ref,
      _delta,
      position
    ) => {
      const width = ref.offsetWidth;
      const height = ref.offsetHeight;
      if (containerRef.current) {
        const { width: maxWidth, height: maxHeight } =
          containerRef.current.getBoundingClientRect();
        const constrainedWidth = Math.min(width, maxWidth);
        const constrainedHeight = Math.min(height, maxHeight);
        dispatch(
          updateWindowSize({
            id: windowState.id,
            width: constrainedWidth,
            height: constrainedHeight,
          })
        );
        dispatch(
          updateWindowPosition({
            id: windowState.id,
            x: position.x,
            y: position.y,
          })
        );
      }
      onFocus();
    };

    const handleMaximize = () => {
      dispatch(maximizeWindow(windowState.id));
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        dispatch(updateWindowSize({ id: windowState.id, width, height }));
        dispatch(updateWindowPosition({ id: windowState.id, x: 0, y: 0 }));
      }
    };

    return (
      <Rnd
        position={windowState.position}
        size={
          windowState.isMaximized
            ? { width: "100%", height: "100%" }
            : windowState.size
        }
        minWidth={150}
        minHeight={35}
        maxWidth={containerRef.current?.getBoundingClientRect().width}
        maxHeight={containerRef.current?.getBoundingClientRect().height}
        onDragStop={handleDragStop}
        onResizeStop={handleResizeStop}
        dragHandleClassName="titlebar"
        enableResizing={!windowState.isMaximized}
        disableDragging={windowState.isMaximized}
      >
        <StyledWindow
          $isFocused={isFocused}
          $isMinimized={windowState.isMinimized}
        >
          <Titlebar
            id={windowState.id}
            title={windowState.title}
            onMinimize={onMinimize}
            onMaximize={handleMaximize}
            onClose={onClose}
            isMaximized={windowState.isMaximized}
          />
          <div style={{ height: "calc(100% - 30px)", overflow: "auto" }}>
            {windowState.application === "musicPlayer" ? (
              <MusicPlayer windowId={windowState.id} />
            ) : (
              <div>{windowState.title} Content</div>
            )}
          </div>
        </StyledWindow>
      </Rnd>
    );
  }
);

export default Window;
