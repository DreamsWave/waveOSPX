import Display from "@/features/phone/display";
import Keypad from "@/features/phone/keypad";
import { PhoneKeypad } from "@/features/phone/styles";
import { useTextInput } from "@/features/phone/text-input/hooks";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PhoneForm() {
  const {
    text,
    setText,
    handleT9Input,
    handleBackspace,
    cursorPosition,
    setCursorPosition,
    moveCursorLeft,
    moveCursorRight,
  } = useTextInput();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleFormSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      console.log("Text sent:", text);
      setText("");
      setIsEditing(false);
    },
    [text, setText]
  );

  const handleSubmitClick = useCallback(
    () => handleFormSubmit({ preventDefault: () => {} } as React.FormEvent),
    [handleFormSubmit]
  );

  useEffect(() => {
    if (isEditing && textareaRef.current) textareaRef.current.focus();
  }, [isEditing]);

  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
      setCursorPosition(e.target.selectionStart);
    },
    [setText, setCursorPosition]
  );

  return (
    <>
      <Display
        text={text}
        cursorPosition={cursorPosition}
        isEditing={isEditing}
        leftActionLabel="Backspace"
        rightActionLabel="Send"
        onTextChange={handleTextChange}
        onBlur={() => {
          setCursorPosition(text.length);
          setIsEditing(false);
        }}
        onClick={() => setIsEditing(true)}
        onLeftAction={handleBackspace}
        onRightAction={handleSubmitClick}
      />
      <PhoneKeypad>
        <Keypad
          onKeyPress={handleT9Input}
          onBackspace={handleBackspace}
          onSubmit={handleFormSubmit}
          onMoveLeft={moveCursorLeft}
          onMoveRight={moveCursorRight}
        />
      </PhoneKeypad>
    </>
  );
}
