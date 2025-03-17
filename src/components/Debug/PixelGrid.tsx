import StyledDebugButton from "@/components/Debug/StyledDebugButton";
import { debounce } from "@/utils/functions";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";

const CanvasStyled = styled.canvas<{ $isVisible: boolean }>`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  z-index: -1;
`;

type Props = { cellSize?: number };

export const PixelGrid = memo(({ cellSize = 2 }: Props) => {
  const theme = useTheme();
  const pixelSize = theme.sizes.pixelSize * cellSize;
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = theme.colors.gridLine;
    ctx.lineWidth = theme.sizes.gridLineWidth;

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
    if (!isVisible) return;
    redraw();
    const handleResize = debounce(() => requestAnimationFrame(redraw), 200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isVisible, redraw]);

  return (
    <>
      <StyledDebugButton onClick={() => setIsVisible((prev) => !prev)}>
        G
      </StyledDebugButton>
      <CanvasStyled $isVisible={isVisible} ref={canvasRef} />
    </>
  );
});

export default PixelGrid;
