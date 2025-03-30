import WindowCloseIconSVG from "@/assets/icons/single/pc/window-close.svg";
import WindowMaximizeIconSVG from "@/assets/icons/single/pc/window-maximize.svg";
import WindowMinimizeIconSVG from "@/assets/icons/single/pc/window-minimize.svg";
import WindowRestoreIconSVG from "@/assets/icons/single/pc/window-restore.svg";
import ButtonTextureSVG from "@/assets/textures/pc/button.svg";
import { WINDOW_APP_ICON_SIZE } from "@/features/pc/windows/constants";
import {
  StyledButton,
  StyledTitle,
  StyledTitlebar,
} from "@/features/pc/windows/window/titlebar/styles";
import PxIcon from "@/shared/components/PxIcon";
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
      <StyledTitlebar
        className="titlebar"
        $isFocused={isFocused}
        $isMaximized={isMaximized}
      >
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
        <div>
          <StyledButton
            onClick={(e) => handleButtonClick(e, onMinimize)}
            onTouchEnd={(e) => handleButtonClick(e, onMinimize)}
            title="Minimize"
            $borderTexture={ButtonTextureSVG}
            $patchMargin={1}
          >
            <PxIcon
              icon={{
                src: WindowMinimizeIconSVG,
                height: 3,
                width: 3,
                alt: "Window minimize icon",
              }}
            />
          </StyledButton>
          <StyledButton
            onClick={(e) => handleButtonClick(e, onMaximize)}
            onTouchEnd={(e) => handleButtonClick(e, onMaximize)}
            title={isMaximized ? "Restore" : "Maximize"}
            $borderTexture={ButtonTextureSVG}
            $patchMargin={1}
          >
            <PxIcon
              icon={{
                src: isMaximized ? WindowRestoreIconSVG : WindowMaximizeIconSVG,
                height: 3,
                width: 3,
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
            $borderTexture={ButtonTextureSVG}
            $patchMargin={1}
          >
            <PxIcon
              icon={{
                src: WindowCloseIconSVG,
                height: 3,
                width: 3,
                alt: "Window close icon",
              }}
            />
          </StyledButton>
        </div>
      </StyledTitlebar>
    );
  }
);

export default Titlebar;
