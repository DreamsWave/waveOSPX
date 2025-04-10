import DotIconSVG from "@/assets/icons/single/pc/dot.svg";
import RadioDisabledTexture from "@/assets/textures/pc/radio/radio-disabled.png";
import RadioTexture from "@/assets/textures/pc/radio/radio.png";
import React from "react";
import styled from "styled-components";

const RadioContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.s(9)}px;
  height: ${({ theme }) => theme.s(9)}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const HiddenInput = styled.input.attrs({ type: "radio" })`
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

const StyledRadio = styled.div<{ $checked: boolean; $disabled: boolean }>`
  width: 100%;
  height: 100%;
  background-image: ${({ $disabled }) =>
    `url(${$disabled ? RadioDisabledTexture : RadioTexture})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  position: relative;

  &:focus-within {
    outline: ${({ theme }) =>
      theme.getBorder(1, theme.common.border.colorFocused)};
    outline-offset: 2px;
  }
`;

const DotIcon = styled.img<{ $checked: boolean }>`
  width: ${({ theme }) => theme.s(5)}px;
  height: ${({ theme }) => theme.s(5)}px;
  opacity: ${({ $checked }) => ($checked ? 1 : 0)};
`;

export type RadioChangeEvent = {
  target: {
    value: string;
    checked: boolean;
  };
};

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> & {
  value: string;
  onChange?: (event: RadioChangeEvent) => void;
  inputRef?: React.Ref<HTMLInputElement>;
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      checked = false,
      onChange,
      value,
      disabled = false,
      className,
      name,
      inputRef,
      ...props
    },
    ref
  ) => {
    const inputReference = inputRef || ref;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange && e.target.checked) {
        onChange({ target: { value, checked: e.target.checked } });
      }
    };

    return (
      <RadioContainer className={className}>
        <HiddenInput
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          ref={inputReference}
          value={value}
          name={name}
          {...props}
        />
        <StyledRadio $checked={checked} $disabled={disabled}>
          <DotIcon src={DotIconSVG} $checked={checked} alt="radio dot" />
        </StyledRadio>
      </RadioContainer>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
