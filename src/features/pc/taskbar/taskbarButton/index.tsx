import TaskButtonActiveTextureSVG from "@/assets/pc/textures/taskbar/button-active.svg";
import TaskButtonTextureSVG from "@/assets/pc/textures/taskbar/button.svg";
import {
  StyledTaskbarButton,
  StyledTaskbarButtonContent,
  StyledTaskbarButtonTitle,
} from "@/features/pc/taskbar/taskbarButton/styles";
import NinePatch from "@/shared/components/NinePatch";
import PxIcon from "@/shared/components/PxIcon";

type Props = {
  isFocused?: boolean;
  isMinimized?: boolean;
  icon?: string;
  title?: string;
  onClick?: () => void;
};

const TaskbarButton = ({
  isFocused = false,
  isMinimized = false,
  icon = "",
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
            <PxIcon src={icon} height={6} width={6} alt={`${title} app icon`} />
          )}
          <StyledTaskbarButtonTitle>{title}</StyledTaskbarButtonTitle>
        </StyledTaskbarButtonContent>
      </NinePatch>
    </StyledTaskbarButton>
  );
};

export default TaskbarButton;
