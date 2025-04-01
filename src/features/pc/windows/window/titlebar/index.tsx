import WindowCloseIconSVG from "@/assets/icons/single/pc/window-close.svg";
import WindowMaximizeIconSVG from "@/assets/icons/single/pc/window-maximize.svg";
import WindowMinimizeIconSVG from "@/assets/icons/single/pc/window-minimize.svg";
import WindowRestoreIconSVG from "@/assets/icons/single/pc/window-restore.svg";
import WindowTitlebarButtonTextureSVG from "@/assets/textures/pc/window-titlebar-button.svg";
import PxIcon from "@/components/PxIcon";
import { WINDOW_APP_ICON_SIZE } from "@/features/pc/windows/constants";
import {
  StyledButton,
  StyledButtonsContainer,
  StyledTitle,
  StyledTitlebar,
  StyledTitlebarContainer,
} from "@/features/pc/windows/window/titlebar/styles";
import type { Icon } from "@/types/icons";
import { memo } from "react";

type Props = {
  id: string;
  title: string;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  isMaximized: boolean;
  isFocused: boolean;
  icon?: Icon;
};

const Titlebar = memo(
  ({
    title,
    onMinimize,
    onMaximize,
    onClose,
    isMaximized,
    isFocused,
    icon,
  }: Props) => {
    const handleButtonClick = (
      e: React.MouseEvent | React.TouchEvent,
      handler: () => void
    ) => {
      e.preventDefault();
      e.stopPropagation();
      handler();
    };

    return (
      <StyledTitlebarContainer
        className="titlebar"
        $isFocused={isFocused}
        $isMaximized={isMaximized}
      >
        <StyledTitlebar $isFocused={isFocused}>
          {icon && (
            <PxIcon
              icon={{
                name: icon.name,
                size: WINDOW_APP_ICON_SIZE,
                height: icon.height,
                width: icon.width,
                alt: icon.alt || `${title} app icon`,
              }}
            />
          )}
          <StyledTitle>{title}</StyledTitle>
        </StyledTitlebar>
        <StyledButtonsContainer>
          <StyledButton
            onClick={(e) => handleButtonClick(e, onMinimize)}
            onTouchEnd={(e) => handleButtonClick(e, onMinimize)}
            title="Minimize"
            $borderTexture={WindowTitlebarButtonTextureSVG}
            $patchMargin={2}
          >
            <PxIcon
              icon={{
                src: WindowMinimizeIconSVG,
                height: 5,
                width: 5,
                alt: "Window minimize icon",
              }}
            />
          </StyledButton>
          <StyledButton
            onClick={(e) => handleButtonClick(e, onMaximize)}
            onTouchEnd={(e) => handleButtonClick(e, onMaximize)}
            title={isMaximized ? "Restore" : "Maximize"}
            $borderTexture={WindowTitlebarButtonTextureSVG}
            $patchMargin={2}
          >
            <PxIcon
              icon={{
                src: isMaximized ? WindowRestoreIconSVG : WindowMaximizeIconSVG,
                height: 5,
                width: 5,
                alt: isMaximized
                  ? "Window restore icon"
                  : "Window maximize icon",
              }}
            />
          </StyledButton>
          <StyledButton
            onClick={(e) => handleButtonClick(e, onClose)}
            onTouchEnd={(e) => handleButtonClick(e, onClose)}
            title="Close"
            $borderTexture={WindowTitlebarButtonTextureSVG}
            $patchMargin={2}
          >
            <PxIcon
              icon={{
                src: WindowCloseIconSVG,
                height: 5,
                width: 5,
                alt: "Window close icon",
              }}
            />
          </StyledButton>
        </StyledButtonsContainer>
      </StyledTitlebarContainer>
    );
  }
);

export default Titlebar;
