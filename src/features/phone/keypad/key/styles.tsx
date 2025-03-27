import { getFontSize } from "@/utils/functions";
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

export const KeypadButtonContainer = styled.button<{ $isControl?: boolean }>`
  ${buttonBaseStyles}
  ${({ $isControl }) =>
    $isControl &&
    css`
      height: ${({ theme }) => `${theme.s(15)}px`};
      width: ${({ theme }) => `${theme.s(20)}px`};
    `}
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
