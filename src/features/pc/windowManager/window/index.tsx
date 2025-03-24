import WindowTextureSVG from "@/assets/pc/textures/window/window.svg";
import MusicPlayer from "@/features/pc/applications/musicPlayer/MusicPlayer";
import {
  StyledWindow,
  StyledWindowContent,
} from "@/features/pc/windowManager/window/styles";
import Titlebar from "@/features/pc/windowManager/window/titlebar";
import {
  updateWindowPosition,
  updateWindowSize,
  WindowState,
} from "@/features/pc/windowManager/windowSlice";
import NinePatch from "@/shared/components/NinePatch";
import { RootState } from "@/store";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Rnd,
  type Position,
  type RndDragEvent,
  type RndResizeCallback,
} from "react-rnd";

type Props = {
  windowState: WindowState;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onFocus: (windowId: string) => void;
  onMinimize: (windowId: string) => void;
  onClose: (windowId: string) => void;
  onMaximize: (windowId: string) => void;
};

const Window = memo(
  ({
    windowState,
    containerRef,
    onFocus,
    onMinimize,
    onClose,
    onMaximize,
  }: Props) => {
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
      onFocus(windowState.id);
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
      onFocus(windowState.id);
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
          <NinePatch texture={WindowTextureSVG} patchMargin={1}>
            <Titlebar
              id={windowState.id}
              title={windowState.title}
              onMinimize={() => onMinimize(windowState.id)}
              onMaximize={() => onMaximize(windowState.id)}
              onClose={() => onClose(windowState.id)}
              isMaximized={windowState.isMaximized}
              isFocused={isFocused}
              icon={windowState.icon}
            />
            <StyledWindowContent>
              {windowState.application === "musicPlayer" ? (
                <MusicPlayer windowId={windowState.id} />
              ) : (
                <div>{windowState.title} Content</div>
              )}
            </StyledWindowContent>
          </NinePatch>
        </StyledWindow>
      </Rnd>
    );
  }
);

export default Window;
