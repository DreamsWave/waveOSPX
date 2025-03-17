import useFocus from "@/hooks/useFocus";
import { memo } from "react";
import styled from "styled-components";

const mediaQuery = (width: number, height: number) => {
  return `@media (max-width: ${width}px) or (max-height: ${height}px)`;
};

const ScreenWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  top: ${({ theme }) =>
    theme.sizes.monitor.screen.position.yPX * theme.sizes.pixelSize + 10}px;
  left: ${({ theme }) =>
    theme.sizes.monitor.screen.position.xPX * theme.sizes.pixelSize + 10}px;
  scale: ${({ $isFocused }) => ($isFocused ? 1 : 0.95)};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: ${({ theme }) => theme.sizes.monitor.screen.resolution.width}px;
  height: ${({ theme }) => theme.sizes.monitor.screen.resolution.height}px;
  transition: filter 0.5s ease, scale 0.5s ease-in-out;
  filter: blur(${({ $isFocused }) => ($isFocused ? 0 : "1px")});

  ${({ theme }) =>
    mediaQuery(
      theme.sizes.monitor.screen.resolution.width,
      theme.sizes.monitor.screen.resolution.height
    )} {
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    transform: translateX(0);
  }
`;

const ScreenContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

type Props = {
  children: React.ReactNode;
};
export const Screen = memo(({ children }: Props) => {
  const { isFocused } = useFocus();

  return (
    <ScreenWrapper $isFocused={isFocused}>
      <ScreenContent>{children}</ScreenContent>
    </ScreenWrapper>
  );
});

export default Screen;
