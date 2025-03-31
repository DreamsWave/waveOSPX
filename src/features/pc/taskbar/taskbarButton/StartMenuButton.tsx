import StartMenuButtonActiveIconSVG from "@/assets/icons/single/cute-face-wink.svg";
import StartMenuButtonIconSVG from "@/assets/icons/single/cute-face.svg";
import { useStartMenu } from "@/features/pc/startMenu/useStartMenu";
import {
  StyledStartMenuButton,
  StyledTaskbarButtonTitle,
} from "@/features/pc/taskbar/taskbarButton/styles";
import PxIcon from "@/shared/components/PxIcon";
import type { Icon } from "@/types/icons";
import { useEffect, useState } from "react";

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
  height: 6,
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
    <StyledStartMenuButton
      className="start-menu-button"
      $isActive={isOpen}
      onClick={toggleMenu}
      {...props}
    >
      {icon && (
        <PxIcon
          icon={{
            name: icon.name,
            size: icon.size,
            height: icon.height,
            width: icon.width,
            alt: icon.alt || `${title} icon`,
            src: isOpen ? iconSrc : icon.src,
          }}
        />
      )}
      {title && <StyledTaskbarButtonTitle>{title}</StyledTaskbarButtonTitle>}
    </StyledStartMenuButton>
  );
};

export default StartMenuButton;
