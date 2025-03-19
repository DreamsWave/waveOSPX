import useDebug from "@/hooks/useDebug";
import { debounce } from "@/utils/functions";
import { motion, MotionValue } from "motion/react";
import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import styled, { useTheme } from "styled-components";

const StyledCanvas = styled(motion.canvas)<{ $isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: ${({ theme }) => theme.sizes.backgroundImageSize.width}px;
  height: ${({ theme }) => theme.sizes.backgroundImageSize.height}px;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  z-index: ${({ theme }) => theme.sizes.zIndex.middle};
`;

type Props = {
  cellSize?: number;
  lineColor?: string;
  lineWidth?: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

/**
 * Renders a pixel grid overlay that moves with the background.
 * @param cellSize - Optional custom cell size overriding the Redux state
 * @param lineColor - Optional custom line color
 * @param lineWidth - Optional custom line width
 * @param x - Horizontal motion value from Framer Motion
 * @param y - Vertical motion value from Framer Motion
 */
const PixelGridCanvas = memo(
  ({ cellSize: propCellSize, lineColor, lineWidth, x, y }: Props) => {
    const {
      pixelGrid: { cellSize: reduxCellSize, enabled },
    } = useDebug();
    const theme = useTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const pixelSize = useMemo(
      () => theme.sizes.pixelSize * (propCellSize ?? reduxCellSize),
      [propCellSize, reduxCellSize, theme.sizes.pixelSize]
    );

    const redraw = useCallback(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      const { width, height } = theme.sizes.backgroundImageSize;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      ctx.strokeStyle = lineColor ?? theme.colors.debug.pixelGridLineColor;
      ctx.lineWidth = lineWidth ?? theme.sizes.debug.pixelGridLineWidth;

      const pixelsX = Math.ceil(canvas.width / pixelSize);
      const pixelsY = Math.ceil(canvas.height / pixelSize);

      ctx.beginPath();
      for (let i = 0; i <= pixelsX; i++) {
        const posX = i * pixelSize;
        ctx.moveTo(posX, 0);
        ctx.lineTo(posX, canvas.height);
      }
      for (let i = 0; i <= pixelsY; i++) {
        const posY = i * pixelSize;
        ctx.moveTo(0, posY);
        ctx.lineTo(canvas.width, posY);
      }
      ctx.stroke();
    }, [pixelSize, theme, lineColor, lineWidth]);

    useEffect(() => {
      if (!enabled) return;
      redraw();
      const handleResize = debounce(() => requestAnimationFrame(redraw), 200);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [enabled, redraw]);

    return (
      <StyledCanvas $isVisible={enabled} ref={canvasRef} style={{ x, y }} />
    );
  }
);

export default PixelGridCanvas;
