import {
  StyledButton,
  StyledTitle,
  StyledTitlebar,
} from "@/features/pc/windowManager/window/titlebar/styles";
import { memo } from "react";

type Props = {
  id: string;
  title: string;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  isMaximized: boolean;
};

const Titlebar = memo(
  ({
    // id,
    title,
    onMinimize,
    onMaximize,
    onClose,
    isMaximized,
  }: Props) => {
    return (
      <StyledTitlebar className="titlebar">
        <StyledTitle>{title}</StyledTitle>
        <div>
          <StyledButton onClick={onMinimize} title="Minimize">
            -
          </StyledButton>
          <StyledButton
            onClick={onMaximize}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? "□" : "⧠"}
          </StyledButton>
          <StyledButton onClick={onClose} title="Close">
            ×
          </StyledButton>
        </div>
      </StyledTitlebar>
    );
  }
);

export default Titlebar;
