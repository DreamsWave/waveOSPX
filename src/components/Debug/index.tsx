import FocusToggleButton from "@/components/Debug/FocusToggleButton";
import PixelGrid from "@/components/Debug/PixelGrid";
import ReducedMotionToggleButton from "@/components/Debug/ReducedMotionToggleButton";
import ThemeToggleButton from "@/components/Debug/ThemeToggleButton";
import { useState } from "react";
import styled from "styled-components";

const DebugStyled = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({ theme }) => theme.sizes.zIndex?.top || 1000};
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: end;
`;

const DebugButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const DebugMenuStyled = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: end;
  gap: 5px;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px;
`;

const Debug = () => {
  const isDebugVisible = import.meta.env.DEV;
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleDebugMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <DebugStyled $isVisible={isDebugVisible}>
      <DebugButtonStyled onClick={toggleDebugMenu}>D</DebugButtonStyled>
      <DebugMenuStyled $isVisible={isMenuVisible}>
        <PixelGrid />
        <ThemeToggleButton />
        <FocusToggleButton />
        <ReducedMotionToggleButton />
      </DebugMenuStyled>
    </DebugStyled>
  );
};

export default Debug;
