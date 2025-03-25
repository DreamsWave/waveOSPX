import StartMenuButtonActiveIconSVG from "@/assets/icons/single/cute-face-wink.svg";
import StartMenuButtonIconSVG from "@/assets/icons/single/cute-face.svg";
import TaskbarButton from "@/features/pc/taskbar/taskbarButton";
import { StyledTaskbarButton } from "@/features/pc/taskbar/taskbarButton/styles";
import { Icon } from "@/types/icons";
import { useState } from "react";
import styled from "styled-components";

export const StyledStartMenuButton = styled(StyledTaskbarButton)`
  background: ${({ theme }) =>
    theme.colors.pc.taskbar.startMenuButton.background};
  color: ${({ theme }) => theme.colors.pc.taskbar.startMenuButton.text};
`;

type Props = {
  isActive?: boolean;
  isMinimized?: boolean;
  icon?: Icon;
  title?: string;
};

const DEFAULT_ICON: Icon = {
  name: "cute-face",
  src: StartMenuButtonIconSVG,
  height: 7,
  width: 15,
};

const StartMenuButton = ({
  icon = DEFAULT_ICON,
  title = "",
  ...props
}: Props) => {
  const [isActive, setIsActive] = useState(props.isActive ?? false);

  const activeIcon: Icon = {
    ...icon,
    src: isActive ? StartMenuButtonActiveIconSVG : StartMenuButtonIconSVG,
  };

  const toggleIsActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <TaskbarButton
      isFocused={isActive}
      isMinimized={false}
      icon={activeIcon}
      title={title}
      onClick={toggleIsActive}
    />
  );
};

export default StartMenuButton;
