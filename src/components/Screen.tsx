import { px } from "@/utils/functions";
import styled from "styled-components";

const ScreenWrapper = styled.div`
  position: absolute;
  top: ${px(25)};
  left: 50%;
  transform: translateX(-50%);
  background: #f5f7fa;
  width: ${px(340)};
  height: ${px(256)};

  @media (max-width: 768px) {
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
  return (
    <ScreenWrapper>
      <ScreenContent>{children}</ScreenContent>
    </ScreenWrapper>
  );
};

export default Screen;
