import Monocraft from "@/assets/fonts/Monocraft/Monocraft.otf";
import { createBorderSvg } from "@/styles/styledUtils";
import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: "Monocraft";
    font-weight: normal;
    font-style: normal;
    font-display: swap; /* Fallback to system font while loading */
    src: url(${Monocraft}) format("opentype"); /* Correct format for .otf */
  }

  *,
  *::before,
  *::after {
    border: 0;
    box-sizing: border-box;
    /* cursor: default; */
    font-variant-numeric: tabular-nums;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    text-rendering: optimizeLegibility;
    -webkit-touch-callout: none;
    user-select: none;
  }

  body,
  html {
    font-family: ${({ theme }) => theme.formats.systemFont};
  }

  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    text-size-adjust: none;
    color: ${({ theme }) => theme.common.text.primary};
    font-size: ${({ theme }) => theme.getFontSize("base")};
    line-height: 1.5;
  }

  html {
    background-color: ${({ theme }) => theme.background};
    /* stylelint-disable value-no-vendor-prefix */
    height: -webkit-fill-available;
    height: -moz-available;
    /* stylelint-enable value-no-vendor-prefix */

    &::before,
    &::after {
      background-blend-mode: var(--background-blend-mode);
      background-position: center;
      content: "";
      height: 100%;
      position: absolute;
      transition: opacity 1.25s ease-in-out;
      width: 100%;
      z-index: -1;
    }

    &::before {
      background: var(--before-background);
      opacity: var(--before-background-opacity);
    }

    &::after {
      background: var(--after-background);
      opacity: var(--after-background-opacity);
    }
  }

  input::selection,
  textarea::selection {
    background-color: rgb(0, 120, 215);
    color: #fff;
  }

  input,
  textarea {
    cursor: text;
    user-select: text;
    background: ${({ theme }) => theme.common.background.secondary};
    color: ${({ theme }) => theme.common.text.primary};
    padding: ${({ theme }) => theme.s(2)}px ${({ theme }) => theme.s(3)}px;
    font-family: ${({ theme }) => theme.formats.systemFont};
    font-size: ${({ theme }) => theme.getFontSize("base")};
    border: ${({ theme }) => theme.getBorder(1, theme.common.border.color)};
    border-radius: ${({ theme }) => theme.s(1)}px;
    ${createBorderSvg()}

    &:focus {
      border-color: ${({ theme }) => theme.common.border.colorFocused};
    }
  }

  select {
    background: ${({ theme }) => theme.common.background.secondary};
    color: ${({ theme }) => theme.common.text.primary};
    padding: ${({ theme }) => theme.s(1)}px ${({ theme }) => theme.s(3)}px;
    font-family: ${({ theme }) => theme.formats.systemFont};
    font-size: ${({ theme }) => theme.getFontSize("base")};
    border: ${({ theme }) => theme.getBorder(1, theme.common.border.color)};
    cursor: pointer;
    ${createBorderSvg()}
  }

  picture > img {
    display: block;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Base typography styles for markdown and general content */
  h1 {
    font-size: ${({ theme }) => theme.getFontSize("xl")};
    margin-bottom: ${({ theme }) => theme.s(5)}px;
    color: ${({ theme }) => theme.common.text.primary};
    font-weight: bold;
  }

  h2 {
    font-size: ${({ theme }) => theme.getFontSize("lg")};
    margin: ${({ theme }) => theme.s(5)}px 0 ${({ theme }) => theme.s(4)}px;
    color: ${({ theme }) => theme.common.text.primary};
    font-weight: bold;
  }

  h3 {
    font-size: ${({ theme }) => theme.getFontSize("base")};
    margin: ${({ theme }) => theme.s(4)}px 0 ${({ theme }) => theme.s(3)}px;
    color: ${({ theme }) => theme.common.text.primary};
    font-weight: bold;
  }

  p {
    margin: ${({ theme }) => theme.s(3)}px 0;
  }

  ul,
  ol {
    margin: ${({ theme }) => theme.s(3)}px 0;
    padding-left: ${({ theme }) => theme.s(8)}px;
    list-style-position: outside;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin: ${({ theme }) => theme.s(2)}px 0;
  }

  code {
    background: ${({ theme }) => theme.common.background.secondary};
    padding: ${({ theme }) => theme.s(1)}px ${({ theme }) => theme.s(2)}px;
    border-radius: ${({ theme }) => theme.s(1)}px;
    font-family: ${({ theme }) => theme.formats.systemFont};
    font-size: 0.9em;
  }

  pre {
    background: ${({ theme }) => theme.common.background.secondary};
    padding: ${({ theme }) => theme.s(4)}px;
    border-radius: ${({ theme }) => theme.s(2)}px;
    overflow-x: auto;
    margin: ${({ theme }) => theme.s(3)}px 0;

    code {
      background: transparent;
      padding: 0;
      border-radius: 0;
    }
  }

  blockquote {
    border-left: ${({ theme }) =>
      theme.getBorder(4, theme.common.border.color)};
    margin: ${({ theme }) => theme.s(3)}px 0;
    padding-left: ${({ theme }) => theme.s(5)}px;
    color: ${({ theme }) => theme.common.text.secondary};
  }

  a {
    color: ${({ theme }) => theme.common.link.color};
    text-decoration: none;
    transition: color 0.2s ease;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.common.link.hover};
    }

    &:focus {
      outline: ${({ theme }) =>
        theme.getBorder(1, theme.common.border.colorFocused)};
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: ${({ theme }) => theme.s(3)}px 0;
  }

  th,
  td {
    border: ${({ theme }) => theme.getBorder(1, theme.common.border.color)};
    padding: ${({ theme }) => theme.s(2)}px ${({ theme }) => theme.s(3)}px;
    text-align: left;
  }

  th {
    background: ${({ theme }) => theme.common.background.secondary};
    font-weight: bold;
  }

  hr {
    border: 0;
    height: ${({ theme }) => theme.s(1)}px;
    background: ${({ theme }) => theme.common.border.color};
    margin: ${({ theme }) => theme.s(6)}px 0;
  }

  button {
    background: ${({ theme }) => theme.common.background.secondary};
    color: ${({ theme }) => theme.common.text.white};
    padding: ${({ theme }) => theme.s(1)}px ${({ theme }) => theme.s(2)}px;
    font-family: ${({ theme }) => theme.formats.systemFont};
    font-size: ${({ theme }) => theme.getFontSize("base")};
    border: ${({ theme }) => theme.getBorder(1, theme.common.border.color)};
    cursor: pointer;
    ${createBorderSvg()}

    &:hover {
      background: ${({ theme }) => theme.common.background.muted};
      background-clip: padding-box;
    }

    &:focus {
      border-color: ${({ theme }) => theme.common.border.colorFocused};
      outline: none;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: ${({ theme }) => theme.s(7)}px;
    height: ${({ theme }) => theme.s(7)}px;
    border: ${({ theme }) => theme.getBorder(1, theme.common.border.color)};
    background: ${({ theme }) => theme.common.background.secondary};
    ${createBorderSvg()}
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    padding: 0;

    &:checked {
      background: ${({ theme }) => theme.common.text.accent};
      background-clip: padding-box;
      &:after {
        content: "✓";
        color: ${({ theme }) => theme.common.text.white};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: ${({ theme }) => theme.s(3)}px;
      }
    }
  }

  /* For better accessibility */
  :focus-visible {
    outline: ${({ theme }) =>
      theme.getBorder(2, theme.common.border.colorFocused)};
    outline-offset: 2px;
  }
`;

export default GlobalStyle;
