import CheckIconSVG from "@/assets/icons/single/pc/check.svg";
import LoweredRoundedTextureSVG from "@/assets/textures/pc/lowered-rounded.svg";
import PxIcon from "@/components/PxIcon";
import { getBorderImage } from "@/styles/styledUtils";
import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.s(10)}px;
  height: ${({ theme }) => theme.s(10)}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  outline: none;
  pointer-events: auto;
  z-index: 1;

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledCheckbox = styled.div<{ $checked: boolean; $disabled: boolean }>`
  width: 100%;
  height: 100%;
  background: ${({ theme, $checked, $disabled }) =>
    $disabled
      ? theme.common.checkbox.background.disabled
      : $checked
      ? theme.common.checkbox.background.checked
      : theme.common.checkbox.background.default};
  ${getBorderImage(LoweredRoundedTextureSVG, 1)}
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  padding: ${({ theme }) => theme.s(1)}px;
  background-clip: padding-box;
  position: relative;

  &:hover {
    background: ${({ theme, $disabled }) =>
      $disabled
        ? theme.common.checkbox.background.disabled
        : theme.common.checkbox.background.default};
  }

  &:focus-within {
    outline: ${({ theme }) =>
      theme.getBorder(1, theme.common.border.colorFocused)};
    outline-offset: 2px;
  }

  img {
    width: ${({ theme }) => theme.s(6)}px;
    height: ${({ theme }) => theme.s(6)}px;
    color: ${({ theme }) => theme.common.checkbox.color.default};
  }
`;

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> & {
  onChange?: (checked: boolean) => void;
  inputRef?: React.Ref<HTMLInputElement>;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked = false,
      onChange,
      disabled = false,
      className,
      inputRef,
      ...props
    },
    ref
  ) => {
    // Use provided ref or the forwarded ref
    const inputReference = inputRef || ref;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        onChange(e.target.checked);
      }
    };

    return (
      <CheckboxContainer className={className}>
        <HiddenCheckbox
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          ref={inputReference}
          {...props}
        />
        <StyledCheckbox $checked={checked} $disabled={disabled}>
          {checked && (
            <PxIcon icon={{ src: CheckIconSVG, width: 6, height: 6 }} />
          )}
        </StyledCheckbox>
      </CheckboxContainer>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
