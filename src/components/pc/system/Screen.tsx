import { getScreenMediaQuery } from "@/utils/functions";
import { memo } from "react";
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

const StyledScreenContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

type Props = {
  children: React.ReactNode;
  isFocused: boolean;
};

export const Screen = memo(({ children, isFocused }: Props) => {
  return (
    <StyledScreenWrapper $isFocused={isFocused}>
      <StyledScreenContent>{children}</StyledScreenContent>
    </StyledScreenWrapper>
  );
});

export default Screen;
