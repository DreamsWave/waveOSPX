import useFocus from "@/hooks/useFocus";
import { MONITOR_RESOLUTION } from "@/utils/constants";
import { px } from "@/utils/functions";
import styled from "styled-components";

const ScreenWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    scale(${({ $isFocused }) => ($isFocused ? 1 : 0.95)});
  background: #f5f7fa;
  width: ${px(MONITOR_RESOLUTION.width)};
  height: ${px(MONITOR_RESOLUTION.height)};
  transition: all 0.5s ease-in-out;
  filter: blur(${({ $isFocused }) => ($isFocused ? 0 : "1px")});

  @media (max-width: 1024px) or (max-height: 768px) {
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
export const Screen = ({ children }: Props) => {
  const { isFocused } = useFocus();

  return (
    <ScreenWrapper $isFocused={isFocused}>
      <ScreenContent>{children}</ScreenContent>
    </ScreenWrapper>
  );
};

export default Screen;
