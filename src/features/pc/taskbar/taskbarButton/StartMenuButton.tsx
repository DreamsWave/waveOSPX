import StartMenuButtonActiveIconSVG from "@/assets/icons/single/cute-face-wink.svg";
import StartMenuButtonIconSVG from "@/assets/icons/single/cute-face.svg";
import { useStartMenu } from "@/features/pc/startMenu/useStartMenu";
import TaskbarButton from "@/features/pc/taskbar/taskbarButton";
import { StyledTaskbarButton } from "@/features/pc/taskbar/taskbarButton/styles";
import type { Icon } from "@/types/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const StyledStartMenuButton = styled(StyledTaskbarButton)`
  background: ${({ theme }) => theme.pc.taskbar.startMenuButton.background};
  color: ${({ theme }) => theme.pc.taskbar.startMenuButton.text};
`;

type Props = {
  isActive?: boolean;
  isMinimized?: boolean;
  icon?: Icon;
  title?: string;
  onClick?: () => void;
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
  const { isOpen, toggleMenu } = useStartMenu();
  const [iconSrc, setIconSrc] = useState(icon.src);

  useEffect(() => {
    if (isOpen) {
      setIconSrc(StartMenuButtonActiveIconSVG);
    } else {
      setIconSrc(icon.src);
    }
  }, [icon.src, isOpen]);

  return (
    <TaskbarButton
      className="start-menu-button"
      isFocused={isOpen}
      isMinimized={false}
      icon={isOpen ? { ...icon, src: iconSrc } : icon}
      title={title}
      onClick={toggleMenu}
      {...props}
    />
  );
};

export default StartMenuButton;
