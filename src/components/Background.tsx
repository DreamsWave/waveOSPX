import MainBackgroundImage from "@/assets/images/main-background.png";
import useFocus from "@/hooks/useFocus";
import { motion, useMotionValue } from "motion/react";
import { memo, useEffect } from "react";
import styled from "styled-components";

const BackgroundStyled = styled(motion.div)<{ $isFocused: boolean }>`
  background-color: ${({ theme }) => theme.colors.background};
  width: ${({ theme }) =>
    theme.sizes.backgroundImageSize.width +
    20}px; /* Image width + movement range */
  height: ${({ theme }) =>
    theme.sizes.backgroundImageSize.height +
    20}px; /* Image height + movement range */
  position: absolute;
  top: 50%;
  left: 50%;
  background-image: url(${MainBackgroundImage});
  background-size: ${({ $isFocused, theme }) =>
    $isFocused
      ? `${theme.sizes.backgroundImageSize.width}px ${theme.sizes.backgroundImageSize.height}px`
      : `${theme.sizes.backgroundImageSize.width * 0.95}px ${
          theme.sizes.backgroundImageSize.height * 0.95
        }px`};
  background-position: center; /* Center the image within the container */
  background-repeat: no-repeat;
  transition: filter 0.5s ease, background 0.5s ease-in-out;
  filter: blur(${({ $isFocused }) => ($isFocused ? 0 : "1px")});
`;

type Props = {
  children: React.ReactNode;
};

const Background = memo(({ children }: Props) => {
  const { isFocused } = useFocus();

  // Motion values to track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Update mouse position on move
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate offset from center (normalized between -1 and 1)
      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;

      // Apply a subtle movement range (e.g., -10px to 10px)
      mouseX.set(offsetX * -10);
      mouseY.set(offsetY * -10);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <BackgroundStyled
      $isFocused={isFocused}
      style={{
        x: mouseX,
        y: mouseY,
        translate: "-50% -50%",
      }}
    >
      {children}
    </BackgroundStyled>
  );
});

export default Background;
