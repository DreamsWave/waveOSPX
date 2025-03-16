import MainBackgroundImage from "@/assets/images/main-background.png";
import useFocus from "@/hooks/useFocus";
import React, { useEffect } from "react";
import styled from "styled-components";

const BackgroundBase = styled.div<{ $isFocused: boolean }>`
  background-color: lightblue;
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${MainBackgroundImage});
  background-size: ${({ $isFocused }) =>
    $isFocused ? `2100px 1158px` : `${2100 * 0.95}px ${1158 * 0.95}px`};
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.5s ease-in-out;
  filter: blur(${({ $isFocused }) => ($isFocused ? 0 : "1px")});
`;

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => {
  const { isFocused } = useFocus();
  useEffect(() => {
    console.log("isFocused", isFocused);
  }, [isFocused]);
  return <BackgroundBase $isFocused={isFocused}>{children}</BackgroundBase>;
};

export default Background;
