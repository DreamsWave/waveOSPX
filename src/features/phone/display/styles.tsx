import { getFontSize, px } from "@/utils/functions";
import styled, { css } from "styled-components";

const textStyles = css`
  font-family: "Monocraft", Courier, monospace;
  font-size: ${getFontSize("base")};
  color: ${({ theme }) => theme.colors.phone.text};
  line-height: 1.2;
  box-sizing: border-box;
`;

export const PhoneDisplay = styled.div`
  background-color: ${({ theme }) => theme.colors.phone.background};
  overflow: hidden;
  display: flex;
  z-index: 1;
  position: absolute;
  top: ${px(17)};
  left: ${px(10)};
  height: ${px(83)};
  width: ${px(68)};
  flex-direction: column;
`;

export const DisplayWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.phone.background};
  flex: 1;
  padding: ${px(4)};
  overflow: hidden;
  display: flex;
  position: relative;
`;

export const DisplayContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DisplayText = styled.div`
  ${textStyles}
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  white-space: pre-wrap;
  text-align: start;
  overflow-wrap: break-word;
  position: relative;
  user-select: none;
`;

export const Textarea = styled.textarea<{ $isVisible: boolean }>`
  ${textStyles}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`;

export const Cursor = styled.span`
  width: 0;
  height: 1em;
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    right: -2px;
    background-color: lightblue;
    animation: blink 1.5s step-end infinite;
    @keyframes blink {
      50% {
        background-color: transparent;
      }
    }
  }
`;

export const DisplayControlIndicators = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: lightblue;
`;

export const DisplayControlIndicator = styled.button`
  font-family: "Monocraft", Courier, monospace;
  font-size: ${getFontSize("sm")};
  padding: ${px(1)} ${px(3)};
  color: ${({ theme }) => theme.colors.phone.text};
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
