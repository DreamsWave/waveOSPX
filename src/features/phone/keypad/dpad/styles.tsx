import { px } from "@/utils/functions";
import styled, { css } from "styled-components";

export const DPadContainer = styled.div`
  height: ${px(32)};
  width: ${px(32)};
  position: relative;
`;

export const DPadTexture = styled.img`
  height: ${px(32)};
  width: ${px(32)};
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

export const KeysContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const DPadButton = styled.button<{
  $position: "up" | "right" | "down" | "left";
}>`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  position: absolute;
  width: ${px(10)};
  height: ${px(10)};
  ${({ $position }) =>
    $position === "up" &&
    css`
      top: 0;
      left: ${px(10)};
    `}
  ${({ $position }) =>
    $position === "right" &&
    css`
      top: ${px(10)};
      right: 0;
    `}
  ${({ $position }) =>
    $position === "down" &&
    css`
      bottom: 0;
      left: ${px(10)};
    `}
  ${({ $position }) =>
    $position === "left" &&
    css`
      top: ${px(10)};
      left: 0;
    `}
`;
