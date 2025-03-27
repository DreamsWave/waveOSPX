import {
  StyledCursor,
  StyledDisplayContent,
  StyledDisplayControlIndicator,
  StyledDisplayControlIndicators,
  StyledDisplayText,
  StyledDisplayWrapper,
  StyledPhoneDisplay,
  StyledTextarea,
} from "@/features/phone/display/styles";
import { useEffect, useRef } from "react";

interface DisplayProps {
  text: string;
  cursorPosition: number;
  isEditing: boolean;
  leftActionLabel?: string;
  rightActionLabel?: string;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: () => void;
  onClick: () => void;
  onLeftAction: () => void;
  onRightAction: () => void;
}

export default function Display({
  text,
  cursorPosition,
  isEditing,
  leftActionLabel = "Decline",
  rightActionLabel = "Accept",
  onTextChange,
  onBlur,
  onClick,
  onLeftAction,
  onRightAction,
}: DisplayProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [isEditing, cursorPosition]);

  const handleClick = () => {
    if (!isEditing) {
      onClick();
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    const newCursorPosition = e.target.selectionStart;

    // Create a new event with the same properties but with the cursor position preserved
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        value: newValue,
        selectionStart: newCursorPosition,
        selectionEnd: newCursorPosition,
      },
    } as React.ChangeEvent<HTMLTextAreaElement>;

    onTextChange(newEvent);
  };

  return (
    <StyledPhoneDisplay>
      <StyledDisplayWrapper onClick={handleClick}>
        <StyledDisplayContent>
          {isEditing ? (
            <StyledTextarea
              ref={textareaRef}
              value={text}
              onChange={handleTextChange}
              onBlur={onBlur}
              spellCheck={false}
              $isVisible={true}
              autoFocus
              aria-label="Editable text input"
            />
          ) : (
            <StyledDisplayText aria-label={`Text: ${text}`}>
              {text.slice(0, cursorPosition)}
              <StyledCursor />
              {text.slice(cursorPosition)}
            </StyledDisplayText>
          )}
        </StyledDisplayContent>
      </StyledDisplayWrapper>
      <StyledDisplayControlIndicators>
        <StyledDisplayControlIndicator
          onClick={onLeftAction}
          aria-label={leftActionLabel}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onLeftAction()}
        >
          {leftActionLabel}
        </StyledDisplayControlIndicator>
        <StyledDisplayControlIndicator
          onClick={onRightAction}
          aria-label={rightActionLabel}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onRightAction()}
        >
          {rightActionLabel}
        </StyledDisplayControlIndicator>
      </StyledDisplayControlIndicators>
    </StyledPhoneDisplay>
  );
}
