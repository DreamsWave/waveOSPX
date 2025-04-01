import { getFontSize } from "@/styles/styledUtils";
import styled, { css } from "styled-components";

const textStyles = css`
  font-family: ${({ theme }) => theme.formats.systemFont};
  font-size: ${getFontSize("base")};
  color: ${({ theme }) => theme.phone.text};
  line-height: 1.2;
  box-sizing: border-box;
`;

export const StyledPhoneDisplay = styled.div`
  background-color: ${({ theme }) => theme.phone.background};
  overflow: hidden;
  display: flex;
  z-index: 1;
  position: absolute;
  top: ${({ theme }) => theme.s(17)}px;
  left: ${({ theme }) => theme.s(10)}px;
  height: ${({ theme }) => theme.s(83)}px;
  width: ${({ theme }) => `${theme.s(68)}px`};
  flex-direction: column;
`;

export const StyledDisplayWrapper = styled.div`
  background-color: ${({ theme }) => theme.phone.background};
  flex: 1;
  padding: ${({ theme }) => theme.s(4)}px;
  overflow: hidden;
  display: flex;
  position: relative;
`;

export const StyledDisplayContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledDisplayText = styled.div`
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

export const StyledTextarea = styled.textarea<{ $isVisible: boolean }>`
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

export const StyledCursor = styled.span`
  width: 0;
  height: 1.2em;
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: ${({ theme }) => `${theme.s(1)}px`};
    top: 0;
    right: ${({ theme }) => `${theme.s(-1)}px`};
    background-color: lightblue;
    animation: blink 1.5s step-end infinite;
    @keyframes blink {
      50% {
        background-color: transparent;
      }
    }
  }
`;

export const StyledDisplayControlIndicators = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.phone.displayControls.background};
  color: ${({ theme }) => theme.phone.displayControls.text};
`;

export const StyledDisplayControlIndicator = styled.button`
  font-family: "Monocraft", Courier, monospace;
  font-size: ${getFontSize("sm")};
  padding: ${({ theme }) => theme.s(1)}px ${({ theme }) => theme.s(3)}px;
  color: inherit;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
