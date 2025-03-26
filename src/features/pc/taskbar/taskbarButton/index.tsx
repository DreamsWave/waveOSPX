import TaskButtonActiveTextureSVG from "@/assets/textures/pc/button-active.svg";
import TaskButtonTextureSVG from "@/assets/textures/pc/button.svg";
import {
  StyledTaskbarButton,
  StyledTaskbarButtonContent,
  StyledTaskbarButtonTitle,
} from "@/features/pc/taskbar/taskbarButton/styles";
import NinePatch from "@/shared/components/NinePatch";
import PxIcon from "@/shared/components/PxIcon";
import type { Icon } from "@/types/icons";

type Props = {
  isFocused?: boolean;
  isMinimized?: boolean;
  icon?: Icon;
  title?: string;
  onClick?: () => void;
};

const TaskbarButton = ({
  isFocused = false,
  isMinimized = false,
  icon = { name: "default-icon", size: "xs" },
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
              icon={{
                name: icon.name,
                size: icon.size,
                height: icon.height,
                width: icon.width,
                alt: icon.alt || `${title} icon`,
              }}
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
