import TaskButtonActiveTextureSVG from "@/assets/pc/textures/taskbar/button-active.svg";
import TaskButtonTextureSVG from "@/assets/pc/textures/taskbar/button.svg";
import {
  StyledTaskbarButton,
  StyledTaskbarButtonContent,
  StyledTaskbarButtonTitle,
} from "@/features/pc/taskbar/taskbarButton/styles";
import NinePatch from "@/shared/components/NinePatch";
import PxIcon from "@/shared/components/PxIcon";
import { Icon } from "@/types/icons";

type Props = {
  isFocused?: boolean;
  isMinimized?: boolean;
  icon?: Icon;
  iconSrc?: string;
  iconHeight?: number;
  iconWidth?: number;
  title?: string;
  onClick?: () => void;
};

const TaskbarButton = ({
  isFocused = false,
  isMinimized = false,
  icon = {
    name: "default-icon",
    size: "sm",
  },
  iconSrc,
  iconHeight,
  iconWidth,
  title = "...",
  onClick,
  ...props
}: Props) => {
  const isActive = isFocused && !isMinimized;
  return (
    <StyledTaskbarButton onClick={onClick} {...props}>
      <NinePatch
        texture={isActive ? TaskButtonActiveTextureSVG : TaskButtonTextureSVG}
        patchMargin={1}
      >
        <StyledTaskbarButtonContent>
          {icon && (
            <PxIcon
              name={icon.name}
              size="sm"
              src={iconSrc}
              height={iconHeight}
              width={iconWidth}
              alt={icon.alt ? icon.alt : `${title} app icon`}
            />
          )}
          {title && (
            <StyledTaskbarButtonTitle>{title}</StyledTaskbarButtonTitle>
          )}
        </StyledTaskbarButtonContent>
      </NinePatch>
    </StyledTaskbarButton>
  );
};

export default TaskbarButton;
