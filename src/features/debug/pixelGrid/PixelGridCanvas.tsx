import { useBackground } from "@/features/background/backgroundContext";
import type { RootState } from "@/store";
import { motion } from "motion/react";
import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import styled, { useTheme } from "styled-components";

const StyledCanvas = styled(motion.canvas)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: ${({ theme }) => theme.sizes.backgroundImageSize.width}px;
  height: ${({ theme }) => theme.sizes.backgroundImageSize.height}px;
  z-index: ${({ theme }) => theme.sizes.zIndex.middle};
`;

type Props = {
  cellSize?: number;
  lineColor?: string;
  lineWidth?: number;
};

const PixelGridCanvas = memo(
  ({ cellSize: propCellSize, lineColor, lineWidth }: Props) => {
    const { backgroundX: x, backgroundY: y } = useBackground();
    const { enabled, cellSize: reduxCellSize } = useSelector(
      (state: RootState) => state.debug.pixelGrid
    );
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
      if (enabled) redraw();
    }, [enabled, redraw]);

    if (!enabled) return null;

    return <StyledCanvas ref={canvasRef} style={{ x, y }} />;
  }
);

export default PixelGridCanvas;
