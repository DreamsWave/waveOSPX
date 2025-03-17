import FocusToggleButton from "@/components/Debug/FocusToggleButton";
import PixelGrid from "@/components/Debug/PixelGrid";
import ThemeToggleButton from "@/components/Debug/ThemeToggleButton";
import styled from "styled-components";

const DebugButtonsStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({ theme }) => theme.sizes.zIndex?.top || 1000};
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2px;
  opacity: 0.5;
`;

const DebugButtons = () => {
  return (
    <DebugButtonsStyled>
      <PixelGrid />
      <ThemeToggleButton />
      <FocusToggleButton />
    </DebugButtonsStyled>
  );
};

export default DebugButtons;
