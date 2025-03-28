import { processDirectory } from "@/features/pc/process/directory";
import {
  type Process,
  updateWindowPosition,
  updateWindowSize,
} from "@/features/pc/process/processSlice";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Rnd, type RndDragEvent, type RndResizeCallback } from "react-rnd";
import { useTheme } from "styled-components";
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
  const theme = useTheme();
  const taskbarHeight = theme.s(theme.pc.taskbar.height);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        if (position) {
          const windowWidth = size?.width || 500;
          const windowHeight = size?.height || 400;
          const newX = Math.max(0, Math.min(position.x, width - windowWidth));
          const newY = Math.max(0, Math.min(position.y, height - windowHeight));
          if (newX !== position.x || newY !== position.y) {
            dispatch(updateWindowPosition({ id, x: newX, y: newY }));
          }
        }
        // Recalculate maximized window size
        if (maximized) {
          const maximizedSize = {
            width: width,
            height: height - taskbarHeight,
          };
          dispatch(
            updateWindowSize({
              id,
              width: maximizedSize.width,
              height: maximizedSize.height,
            })
          );
        } else if (size && size.width > width) {
          // Adjust window width to 100% if it exceeds the container width
          dispatch(
            updateWindowSize({
              id,
              width: width,
              height: size.height,
            })
          );
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [containerRef, dispatch, id, position, size, maximized, taskbarHeight]);

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
      // If the window's bottom edge would go below the taskbar, adjust y so that the bottom aligns with the taskbar
      const windowHeight = size?.height || 400;
      if (constrainedY + windowHeight > height - taskbarHeight) {
        dispatch(
          updateWindowPosition({
            id,
            x: constrainedX,
            y: height - taskbarHeight - windowHeight,
          })
        );
      } else {
        dispatch(
          updateWindowPosition({ id, x: constrainedX, y: constrainedY })
        );
      }
    }
    onFocus(id);
  };

  const handleDragStart = () => {
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

  const maximizeProcess = () => {
    // When unmaximizing on mobile, ensure window is placed in a visible area
    if (maximized && isMobileView && containerRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const windowWidth = Math.min(400, containerWidth * 0.9); // Use smaller size on mobile

      // Center the window horizontally
      const newX = Math.max(0, (containerWidth - windowWidth) / 2);
      const newY = 20; // Keep it near the top for easy access to titlebar

      // Update the position and size
      dispatch(updateWindowPosition({ id, x: newX, y: newY }));
      dispatch(updateWindowSize({ id, width: windowWidth, height: 300 }));
    }
    onMaximize();
  };

  if (!Component || minimized) {
    return null; // Don't render the window if minimized
  }

  const containerBounds = containerRef.current?.getBoundingClientRect();

  // Check if we're in mobile view (container width is less than typical desktop width)
  const isMobileView = containerBounds && containerBounds.width < 768;

  // For maximized windows, ensure they fit within screen width
  const maximizedSize = {
    width: isMobileView ? "100%" : containerBounds?.width || "100%",
    height: (containerBounds?.height || 0) - taskbarHeight,
  };

  // Special handling for mobile view
  const mobileStyle = isMobileView
    ? {
        maxWidth: "100vw",
        overflowX: "hidden" as const,
      }
    : {};

  // Adjust size for mobile view to ensure window fits on screen
  let mobileAdjustedSize = size;
  if (isMobileView && containerBounds) {
    mobileAdjustedSize = {
      width: containerBounds.width, // Use exact container width for mobile
      height: size?.height || 400,
    };
  }

  return (
    <Rnd
      position={maximized ? { x: 0, y: 0 } : position || { x: 100, y: 100 }}
      size={
        maximized
          ? { width: "100%", height: maximizedSize.height }
          : isMobileView
          ? mobileAdjustedSize
          : size || defaultSize || { width: 500, height: 400 }
      }
      minWidth={
        isMobileView
          ? Math.min(containerBounds?.width || 320, 320)
          : defaultSize?.width || 150
      }
      minHeight={35}
      maxWidth={containerBounds?.width}
      maxHeight={containerBounds?.height}
      onDragStop={handleDragStop}
      onDragStart={handleDragStart}
      onResizeStop={handleResizeStop}
      dragHandleClassName="titlebar"
      enableResizing={allowResizing !== false && !maximized}
      disableDragging={maximized}
      style={{ zIndex, ...mobileStyle }}
    >
      <StyledWindow
        $isFocused={isFocused}
        $isMaximized={maximized || false}
        $isMinimized={false} // Always false here since we return null when minimized
        style={{ backgroundColor }}
        className="window"
        onClick={() => onFocus(id)}
      >
        <Titlebar
          id={id}
          title={title}
          onMinimize={onMinimize}
          onMaximize={maximizeProcess}
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
