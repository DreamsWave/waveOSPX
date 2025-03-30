import ButtonPressedSVG from "@/assets/textures/phone/button/button-pressed.svg";
import ButtonSVG from "@/assets/textures/phone/button/button.svg";
import { getBorderImage, getFontSize } from "@/styles/styledUtils";
import styled, { css } from "styled-components";

export const Chars = styled.span`
  font-size: ${getFontSize("xs")};
  opacity: 0.7;
`;

const buttonBaseStyles = css`
  display: inline-flex;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.phone.text};
  outline: none;
  font-family: "Monocraft";
  font-size: ${getFontSize("sm")};
`;

export const KeypadButtonContainer = styled.button<{
  $isControl?: boolean;
  $pressed?: boolean;
}>`
  ${buttonBaseStyles}
  ${({ $isControl }) =>
    $isControl &&
    css`
      height: ${({ theme }) => `${theme.s(15)}px`};
      width: ${({ theme }) => `${theme.s(20)}px`};
    `}
  ${({ $pressed }) =>
    getBorderImage($pressed ? ButtonPressedSVG : ButtonSVG, 4)}
`;

export const KeypadButtonContent = styled.div<{
  $noPadding: boolean;
  $isControl?: boolean;
}>`
  display: inline-flex;
  justify-content: ${({ $isControl }) => ($isControl ? "center" : "start")};
  align-items: center;
  gap: ${({ theme }) => `${theme.s(1)}px`};
  padding: ${({ $noPadding, theme }) => `${$noPadding ? 0 : theme.s(1)}px`};
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
