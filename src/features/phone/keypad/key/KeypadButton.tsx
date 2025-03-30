import {
  KeypadButtonContainer,
  KeypadButtonContent,
} from "@/features/phone/keypad/key/styles";
import React from "react";

interface KeypadButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  noPadding?: boolean;
  pressed?: boolean;
  isControl?: boolean;
}

export const KeypadButton = React.memo(
  ({
    noPadding = false,
    isControl = false,
    pressed = false,
    children,
    ...props
  }: KeypadButtonProps) => (
    <KeypadButtonContainer $isControl={isControl} $pressed={pressed} {...props}>
      <KeypadButtonContent $noPadding={noPadding} $isControl={isControl}>
        {children}
      </KeypadButtonContent>
    </KeypadButtonContainer>
  )
);
