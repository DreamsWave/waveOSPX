import PxIcon from "@/components/PxIcon";
import {
  StyledTaskbarButton,
  StyledTaskbarButtonContent,
  StyledTaskbarButtonTitle,
} from "@/features/pc/taskbar/components/taskbar-button/styles";
import type { Icon } from "@/types/icons";

type Props = {
  isFocused?: boolean;
  isMinimized?: boolean;
  icon?: Icon;
  title?: string;
  onClick?: () => void;
  className?: string;
};

const TaskbarButton = ({
  isFocused = false,
  isMinimized = false,
  icon = { name: "default-icon", size: "xs" },
  title = "...",
  onClick,
  className,
  ...props
}: Props) => {
  const isActive = isFocused && !isMinimized;
  return (
    <StyledTaskbarButton
      onClick={onClick}
      className={className}
      $isActive={isActive}
      {...props}
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
              src: icon.src,
            }}
          />
        )}
        {title && <StyledTaskbarButtonTitle>{title}</StyledTaskbarButtonTitle>}
      </StyledTaskbarButtonContent>
    </StyledTaskbarButton>
  );
};

export default TaskbarButton;
