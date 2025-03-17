import MainBackgroundImage from "@/assets/images/main-background.png";
import useFocus from "@/hooks/useFocus";
import React, { memo } from "react";
import styled from "styled-components";

const BackgroundStyled = styled.div<{ $isFocused: boolean }>`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${MainBackgroundImage});
  background-size: ${({ $isFocused, theme }) =>
    $isFocused
      ? `${theme.sizes.monitor.image.width}px ${theme.sizes.monitor.image.height}px`
      : `${theme.sizes.monitor.image.width * 0.95}px ${
          theme.sizes.monitor.image.height * 0.95
        }px`};
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.5s ease-in-out;
  filter: blur(${({ $isFocused }) => ($isFocused ? 0 : "1px")});
`;

type Props = {
  children: React.ReactNode;
};

const Background = memo(({ children }: Props) => {
  const { isFocused } = useFocus();
  return <BackgroundStyled $isFocused={isFocused}>{children}</BackgroundStyled>;
});

export default Background;
