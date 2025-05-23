import KeypadActions from "@/features/phone/keypad/components/KeypadActions";
import DPad from "@/features/phone/keypad/components/dpad";
import Key from "@/features/phone/keypad/components/key";
import {
  KEYPAD_LAYOUT,
  type T9Key,
  T9_KEY_LABELS,
  T9_KEY_MAP,
} from "@/features/phone/keypad/constants";
import {
  ActionRow,
  KeypadContainer,
  NumericGrid,
} from "@/features/phone/keypad/styles";
import React, { useCallback } from "react";

interface KeypadProps {
  onKeyPress: (key: T9Key) => void;
  onBackspace: () => void;
  onSubmit: (event: React.FormEvent) => void;
  onMoveLeft: () => void;
  onMoveRight: () => void;
  layout?: T9Key[];
  keyMap?: Record<T9Key, string[]>;
  keyLabels?: Record<T9Key, string>;
}

const Keypad = React.memo(
  ({
    onKeyPress,
    onBackspace,
    onSubmit,
    onMoveLeft,
    onMoveRight,
    layout = KEYPAD_LAYOUT,
    keyMap = T9_KEY_MAP,
    keyLabels = T9_KEY_LABELS,
  }: KeypadProps) => {
    const handleKeyPress = useCallback(
      (key: T9Key) => () => onKeyPress(key),
      [onKeyPress]
    );
    const handleBackspace = useCallback(() => onBackspace(), [onBackspace]);
    const handleSubmit = useCallback(
      () => onSubmit({ preventDefault: () => {} } as React.FormEvent),
      [onSubmit]
    );
    const handleMoveLeft = useCallback(() => onMoveLeft(), [onMoveLeft]);
    const handleMoveRight = useCallback(() => onMoveRight(), [onMoveRight]);

    return (
      <KeypadContainer>
        <ActionRow>
          <KeypadActions onBackspace={handleBackspace} side="left" />
          <DPad
            handleMoveUp={handleMoveLeft}
            handleMoveRight={handleMoveRight}
            handleMoveDown={handleMoveRight}
            handleMoveLeft={handleMoveLeft}
          />
          <KeypadActions onSubmit={handleSubmit} side="right" />
        </ActionRow>
        <NumericGrid>
          {layout.map((key) => (
            <Key
              key={key}
              type="default"
              chars={keyMap[key].join("")}
              onClick={handleKeyPress(key)}
            >
              {keyLabels[key]}
            </Key>
          ))}
        </NumericGrid>
      </KeypadContainer>
    );
  }
);

export default Keypad;
