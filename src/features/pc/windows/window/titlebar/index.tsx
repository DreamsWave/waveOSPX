import WindowCloseIconSVG from "@/assets/pc/icons/window-close.svg";
import WindowMaximizeIconSVG from "@/assets/pc/icons/window-maximize.svg";
import WindowMinimizeIconSVG from "@/assets/pc/icons/window-minimize.svg";
import WindowRestoreIconSVG from "@/assets/pc/icons/window-restore.svg";
import ButtonTextureSVG from "@/assets/pc/textures/window/window.svg";
import {
  StyledButton,
  StyledTitle,
  StyledTitlebar,
} from "@/features/pc/windows/window/titlebar/styles";
import NinePatch from "@/shared/components/NinePatch";
import PxIcon from "@/shared/components/PxIcon";
import { memo } from "react";

type Props = {
  id: string;
  title: string;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  isMaximized: boolean;
  isFocused: boolean;
  icon?: string;
};

const Titlebar = memo(
  ({
    // id,
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
          <PxIcon src={icon} height={6} width={6} alt={`${title} app icon`} />
        )}
        <StyledTitle>{title}</StyledTitle>
        <div>
          <StyledButton onClick={onMinimize} title="Minimize">
            <NinePatch texture={ButtonTextureSVG} patchMargin={1}>
              <PxIcon
                src={WindowMinimizeIconSVG}
                height={3}
                width={3}
                alt="Window minimize icon"
              />
            </NinePatch>
          </StyledButton>
          <StyledButton
            onClick={onMaximize}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            <NinePatch texture={ButtonTextureSVG} patchMargin={1}>
              {isMaximized ? (
                <PxIcon
                  src={WindowRestoreIconSVG}
                  height={3}
                  width={3}
                  alt="Window restore icon"
                />
              ) : (
                <PxIcon
                  src={WindowMaximizeIconSVG}
                  height={3}
                  width={3}
                  alt="Window maximize icon"
                />
              )}
            </NinePatch>
          </StyledButton>
          <StyledButton onClick={onClose} title="Close">
            <NinePatch texture={ButtonTextureSVG} patchMargin={1}>
              <PxIcon
                src={WindowCloseIconSVG}
                height={3}
                width={3}
                alt="Window close icon"
              />
            </NinePatch>
          </StyledButton>
        </div>
      </StyledTitlebar>
    );
  }
);

export default Titlebar;
