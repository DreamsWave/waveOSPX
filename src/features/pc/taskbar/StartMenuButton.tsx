import StartMenuButtonIconSVG from "@/assets/pc/icons/cute.svg";
import StartMenuButtonActiveTextureSVG from "@/assets/pc/textures/taskbar/start-menu-button-active.svg";
import StartMenuButtonTextureSVG from "@/assets/pc/textures/taskbar/start-menu-button.svg";
import {
  StyledTaskbarButton,
  StyledTaskbarButtonContent,
} from "@/features/pc/taskbar/taskbarButton/styles";
import NinePatch from "@/shared/components/NinePatch";
import PxIcon from "@/shared/components/PxIcon";
import { useState } from "react";
import styled from "styled-components";

export const StyledStartMenuButton = styled(StyledTaskbarButton)`
  background: ${({ theme }) =>
    theme.colors.pc.taskbar.startMenuButton.background};
  color: ${({ theme }) => theme.colors.pc.taskbar.startMenuButton.text};
`;

type Props = {
  isActive?: boolean;
  icon?: string;
  label?: string;
};

const StartMenuButton = ({
  icon = "",
  isActive = false,
  label = "Start",
}: Props) => {
  const [active, setActive] = useState(isActive);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <StyledStartMenuButton onClick={toggleActive}>
      <NinePatch
        texture={
          active ? StartMenuButtonActiveTextureSVG : StartMenuButtonTextureSVG
        }
        patchMargin={1}
      >
        <StyledTaskbarButtonContent>
          {label}
          <PxIcon
            src={icon ? icon : StartMenuButtonIconSVG}
            height={5}
            width={4}
            alt={`${label} icon`}
          />
        </StyledTaskbarButtonContent>
      </NinePatch>
    </StyledStartMenuButton>
  );
};

export default StartMenuButton;
