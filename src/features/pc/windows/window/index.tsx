import { processDirectory } from "@/features/pc/process/directory";
import {
  type Process,
  updateWindowPosition,
  updateWindowSize,
} from "@/features/pc/process/processSlice";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Rnd, type RndDragEvent, type RndResizeCallback } from "react-rnd";
import { useTheme as useStyledTheme } from "styled-components";
import { StyledWindow, StyledWindowContent } from "./styles";
import Titlebar from "./titlebar";

type Props = {
  windowState: Process;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onFocus: (windowId: string) => void;
  onMinimize: () => void;
  onClose: () => void;
  onMaximize: () => void;
  isFocused: boolean;
};

const Window = ({
  windowState,
  containerRef,
  onFocus,
  onMinimize,
  onClose,
  onMaximize,
  isFocused,
}: Props) => {
  const dispatch = useDispatch();
  const {
    id,
    minimized,
    maximized,
    icon,
    position,
    size,
    backgroundColor,
    title,
    defaultSize,
    allowResizing,
    zIndex,
  } = windowState;

  const baseProcessId = id.split("__")[0];
  const Component = processDirectory[baseProcessId]?.Component;
  const styledTheme = useStyledTheme();
  const taskbarHeight =
    styledTheme.sizes.pc.taskbar.heightPX * styledTheme.sizes.pixelSize;

  const handleDragStop = (_e: RndDragEvent, data: { x: number; y: number }) => {
    if (maximized) return; // Prevent dragging when maximized
    const { x, y } = data;
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const constrainedX = Math.max(
        0,
        Math.min(x, width - (size?.width || 500))
      );
      const constrainedY = Math.max(
        0,
        Math.min(y, height - (size?.height || 400))
      );
      dispatch(updateWindowPosition({ id, x: constrainedX, y: constrainedY }));
    }
    onFocus(id);
  };

  const handleResizeStop: RndResizeCallback = (
    _e,
    _direction,
    ref,
    _delta,
    position
  ) => {
    if (maximized) return; // Prevent resizing when maximized
    const width = ref.offsetWidth;
    const height = ref.offsetHeight;
    if (containerRef.current) {
      const { width: maxWidth, height: maxHeight } =
        containerRef.current.getBoundingClientRect();
      const constrainedWidth = Math.min(width, maxWidth);
      const constrainedHeight = Math.min(height, maxHeight);
      dispatch(
        updateWindowSize({
          id,
          width: constrainedWidth,
          height: constrainedHeight,
        })
      );
      dispatch(updateWindowPosition({ id, x: position.x, y: position.y }));
    }
    onFocus(id);
  };

  if (!Component || minimized) {
    return null; // Don't render the window if minimized
  }

  const containerBounds = containerRef.current?.getBoundingClientRect();
  const maximizedSize = {
    width: containerBounds?.width || "100%",
    height: (containerBounds?.height || 0) - taskbarHeight, // Account for taskbar height
  };

  return (
    <Rnd
      position={
        maximized ? { x: 0, y: 0 } : position || { x: 100, y: 100 } // Snap to top-left when maximized
      }
      size={
        maximized
          ? maximizedSize
          : size || defaultSize || { width: 500, height: 400 }
      }
      minWidth={defaultSize?.width || 150}
      minHeight={35}
      maxWidth={containerBounds?.width}
      maxHeight={containerBounds?.height}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      dragHandleClassName="titlebar"
      enableResizing={allowResizing !== false && !maximized}
      disableDragging={maximized}
      style={{ zIndex }}
    >
      <StyledWindow
        $isFocused={isFocused}
        $isMinimized={false} // Always false here since we return null when minimized
        style={{ backgroundColor }}
      >
        <Titlebar
          id={id}
          title={title}
          onMinimize={onMinimize}
          onMaximize={onMaximize}
          onClose={onClose}
          isMaximized={maximized || false}
          isFocused={isFocused}
          icon={icon}
        />
        <StyledWindowContent>
          <Suspense fallback={<div>Loading...</div>}>
            <Component windowId={id} />
          </Suspense>
        </StyledWindowContent>
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
