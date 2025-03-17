import useFocus from "@/hooks/useFocus";
import { memo } from "react";
import styled from "styled-components";

const mediaQuery = (width: number, height: number) => {
  return `@media (max-width: ${width}px) or (max-height: ${height}px)`;
};

const ScreenWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    scale(${({ $isFocused }) => ($isFocused ? 1 : 0.95)});
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: ${({ theme }) => theme.sizes.monitor.screen.width}px;
  height: ${({ theme }) => theme.sizes.monitor.screen.height}px;
  transition: all 0.5s ease-in-out;
  filter: blur(${({ $isFocused }) => ($isFocused ? 0 : "1px")});

  ${({ theme }) =>
    mediaQuery(
      theme.sizes.monitor.screen.width,
      theme.sizes.monitor.screen.height
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
