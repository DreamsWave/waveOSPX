import ButtonPressedSVG from "@/assets/phone/textures/button/button-pressed.svg";
import ButtonSVG from "@/assets/phone/textures/button/button.svg";
import {
  KeypadButtonContainer,
  KeypadButtonContent,
} from "@/features/phone/keypad/key/styles";
import NinePatch from "@/shared/components/NinePatch";
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
    <KeypadButtonContainer $isControl={isControl} {...props}>
      <NinePatch
        texture={pressed ? ButtonPressedSVG : ButtonSVG}
        patchMargin={4}
      >
        <KeypadButtonContent $noPadding={noPadding} $isControl={isControl}>
          {children}
        </KeypadButtonContent>
      </NinePatch>
    </KeypadButtonContainer>
  )
);
