import PcDesktop from "@/features/pc/PcDesktop";
import { RootState } from "@/store";
import { getScreenMediaQuery } from "@/utils/functions";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledScreenWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  top: ${({ theme }) =>
    theme.sizes.monitor.screen.position.yPX * theme.sizes.pixelSize}px;
  left: ${({ theme }) =>
    theme.sizes.monitor.screen.position.xPX * theme.sizes.pixelSize}px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: ${({ theme }) => theme.sizes.monitor.screen.resolution.width}px;
  height: ${({ theme }) => theme.sizes.monitor.screen.resolution.height}px;
  transition: filter 0.5s ease, scale 0.5s ease-in-out;
  filter: blur(${({ $isFocused }) => ($isFocused ? 0 : "1px")});
  scale: ${({ $isFocused }) => ($isFocused ? 1 : 0.95)};

  ${getScreenMediaQuery()} {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    scale: 1;
    position: fixed;
    z-index: 1;
  }
`;

type Props = {
  children: React.ReactNode;
};

export const Screen = memo(({ children }: Props) => {
  const { currentMode } = useSelector((state: RootState) => state.mode);
  return (
    <StyledScreenWrapper $isFocused={currentMode === "pc"}>
      <PcDesktop>{children}</PcDesktop>
    </StyledScreenWrapper>
  );
});

export default Screen;
