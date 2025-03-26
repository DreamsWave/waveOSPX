import styled, { css } from "styled-components";

export const DPadContainer = styled.div`
  height: ${({ theme }) => theme.s(32)}px;
  width: ${({ theme }) => theme.s(32)}px;
  position: relative;
`;

export const DPadTexture = styled.img`
  height: ${({ theme }) => theme.s(32)}px;
  width: ${({ theme }) => theme.s(32)}px;
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
  width: ${({ theme }) => theme.s(10)}px;
  height: ${({ theme }) => theme.s(10)}px;
  ${({ $position }) =>
    $position === "up" &&
    css`
      top: 0;
      left: ${({ theme }) => theme.s(10)}px;
    `}
  ${({ $position }) =>
    $position === "right" &&
    css`
      top: ${({ theme }) => theme.s(10)}px;
      right: 0;
    `}
  ${({ $position }) =>
    $position === "down" &&
    css`
      bottom: 0;
      left: ${({ theme }) => theme.s(10)}px;
    `}
  ${({ $position }) =>
    $position === "left" &&
    css`
      top: ${({ theme }) => theme.s(10)}px;
      left: 0;
    `}
`;
