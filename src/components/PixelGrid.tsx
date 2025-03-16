import { px } from "@/utils/functions";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const TogglePixelGridButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
  height: ${px(4)};
  width: ${px(4)};
  display: flex;
  padding: 0;
  margin: 0;
  background: #000;
  color: #fff;
  opacity: 0.5;
`;

type Props = {
  pixelSize: number;
};

const PixelGrid = ({ pixelSize }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pixelsX = Math.floor(canvas.width / pixelSize) + 1;
    const pixelsY = Math.floor(canvas.height / pixelSize) + 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 0.1; // Border thickness

    for (let y = 0; y < pixelsY; y++) {
      for (let x = 0; x < pixelsX; x++) {
        ctx.strokeRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      }
    }
  }, [pixelSize]);

  return (
    <>
      <TogglePixelGridButton onClick={() => setIsVisible((prev) => !prev)}>
        G
      </TogglePixelGridButton>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          visibility: isVisible ? "visible" : "hidden",
        }}
      />
    </>
  );
};

export default PixelGrid;
