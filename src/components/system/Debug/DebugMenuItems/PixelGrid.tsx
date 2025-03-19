import { StyledCanvas } from "@/components/system/Debug/styles";
import ToggleButton from "@/components/system/Debug/ToggleButton";
import useDebug from "@/hooks/useDebug";
import { debounce } from "@/utils/functions";
import { memo, useCallback, useEffect, useRef } from "react";
import { useTheme } from "styled-components";

type Props = {
  cellSize?: number;
};

const PixelGrid = memo(({ cellSize: propCellSize }: Props) => {
  const {
    pixelGrid: { cellSize: reduxCellSize, enabled },
    togglePixelGrid,
  } = useDebug();
  const theme = useTheme();
  const pixelSize = theme.sizes.pixelSize * (propCellSize ?? reduxCellSize);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = theme.colors.debug.pixelGridLineColor;
    ctx.lineWidth = theme.sizes.debug.pixelGridLineWidth;

    const pixelsX = Math.ceil(canvas.width / pixelSize);
    const pixelsY = Math.ceil(canvas.height / pixelSize);
    ctx.beginPath();
    for (let x = 0; x <= pixelsX; x++) {
      const posX = x * pixelSize;
      ctx.moveTo(posX, 0);
      ctx.lineTo(posX, canvas.height);
    }
    for (let y = 0; y <= pixelsY; y++) {
      const posY = y * pixelSize;
      ctx.moveTo(0, posY);
      ctx.lineTo(canvas.width, posY);
    }
    ctx.stroke();
  }, [pixelSize, theme]);

  useEffect(() => {
    if (!enabled) return;
    redraw();
    const handleResize = debounce(() => requestAnimationFrame(redraw), 200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [enabled, redraw]);

  return (
    <>
      <ToggleButton
        label="pixel grid"
        value={enabled}
        onToggle={togglePixelGrid}
      />
      <StyledCanvas $isVisible={enabled} ref={canvasRef} />
    </>
  );
});

export default PixelGrid;
