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
import NinePatch from "@/shared/components/NinePatch";
import PxIcon from "@/shared/components/PxIcon";
import { Icon } from "@/types/icons";
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
          <StyledButton onClick={onMinimize} title="Minimize">
            <NinePatch texture={ButtonTextureSVG} patchMargin={1}>
              <PxIcon
                icon={{
                  src: WindowMinimizeIconSVG,
                  height: 3,
                  width: 3,
                  alt: "Window minimize icon",
                }}
              />
            </NinePatch>
          </StyledButton>
          <StyledButton
            onClick={onMaximize}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            <NinePatch texture={ButtonTextureSVG} patchMargin={1}>
              <PxIcon
                icon={{
                  src: isMaximized
                    ? WindowRestoreIconSVG
                    : WindowMaximizeIconSVG,
                  height: 3,
                  width: 3,
                  alt: isMaximized
                    ? "Window restore icon"
                    : "Window maximize icon",
                }}
              />
            </NinePatch>
          </StyledButton>
          <StyledButton onClick={onClose} title="Close">
            <NinePatch texture={ButtonTextureSVG} patchMargin={1}>
              <PxIcon
                icon={{
                  src: WindowCloseIconSVG,
                  height: 3,
                  width: 3,
                  alt: "Window close icon",
                }}
              />
            </NinePatch>
          </StyledButton>
        </div>
      </StyledTitlebar>
    );
  }
);

export default Titlebar;
