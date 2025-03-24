import TaskButtonActiveTextureSVG from "@/assets/pc/textures/taskbar/button-active.svg";
import TaskButtonTextureSVG from "@/assets/pc/textures/taskbar/button.svg";
import {
  StyledTaskbarButton,
  StyledTaskbarButtonContent,
  StyledTaskbarButtonLabel,
} from "@/features/pc/taskbar/taskbarButton/styles";
import NinePatch from "@/shared/components/NinePatch";
import PxIcon from "@/shared/components/PxIcon";

type Props = {
  isActive?: boolean;
  icon?: string;
  label?: string;
  onClick?: () => void;
};

const TaskbarButton = ({
  isActive = false,
  icon = "",
  label = "...",
  onClick,
  ...props
}: Props) => {
  return (
    <StyledTaskbarButton onClick={onClick} {...props}>
      <NinePatch
        texture={isActive ? TaskButtonActiveTextureSVG : TaskButtonTextureSVG}
        patchMargin={1}
      >
        <StyledTaskbarButtonContent>
          {icon && (
            <PxIcon src={icon} height={6} width={6} alt={`${label} app icon`} />
          )}
          <StyledTaskbarButtonLabel>{label}</StyledTaskbarButtonLabel>
        </StyledTaskbarButtonContent>
      </NinePatch>
    </StyledTaskbarButton>
  );
};

export default TaskbarButton;
