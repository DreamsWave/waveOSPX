import MainBackgroundImage from "@/assets/images/main-background.png";
import { useBackground } from "@/features/background/backgroundContext";
import {
  StyledBackground,
  StyledBackgroundImage,
} from "@/features/background/styles";
import { RootState } from "@/store";
import { memo } from "react";
import { useSelector } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const Background = memo(({ children }: Props) => {
  const { backgroundX, backgroundY } = useBackground();
  const currentMode = useSelector((state: RootState) => state.mode.currentMode);

  return (
    <StyledBackground
      style={{ x: backgroundX, y: backgroundY, translate: "-50% -50%" }}
    >
      <StyledBackgroundImage
        src={MainBackgroundImage}
        $isFocused={currentMode === "pc"}
      />
      {children}
    </StyledBackground>
  );
});

export default Background;
