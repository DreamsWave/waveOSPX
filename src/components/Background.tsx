import MainBackgroundImage from "@/assets/images/main-background-1080p.png";
import { px } from "@/utils/functions";
import styled from "styled-components";

const BackgroundBase = styled.div`
  background-color: lightblue;
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${MainBackgroundImage});
  background-size: ${px(640)};
  background-position: center;
  background-repeat: no-repeat;

  background-position-x: center;
  background-position-y: 0;
`;

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => {
  return <BackgroundBase>{children}</BackgroundBase>;
};

export default Background;
