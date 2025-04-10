import type { RadioChangeEvent } from "@/components/common/Radio";
import React from "react";
import styled from "styled-components";

export const RadioGroupContainer = styled.div<{ $row?: boolean }>`
  display: flex;
  flex-direction: ${({ $row }) => ($row ? "row" : "column")};
  gap: ${({ theme, $row }) => ($row ? `0 ${theme.s(4)}px` : `${theme.s(2)}px`)};
`;

type RadioGroupProps = {
  children: React.ReactNode;
  value?: string;
  onChange?: (event: RadioChangeEvent) => void;
  name?: string;
  className?: string;
  row?: boolean;
};

type RadioChildProps = {
  value: string;
  checked?: boolean;
  onChange?: (event: RadioChangeEvent) => void;
  name?: string;
};

type FormControlLabelChildProps = {
  control: React.ReactElement<RadioChildProps>;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  value,
  onChange,
  name,
  className,
  row = false,
}) => {
  const radioButtons = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const childProps = child.props as
      | FormControlLabelChildProps
      | RadioChildProps;

    if ("control" in childProps) {
      const formControlLabel =
        child as React.ReactElement<FormControlLabelChildProps>;
      return React.cloneElement(formControlLabel, {
        control: React.cloneElement(formControlLabel.props.control, {
          checked: formControlLabel.props.control.props.value === value,
          onChange,
          name,
        }),
      });
    }

    if ("value" in childProps) {
      const radio = child as React.ReactElement<RadioChildProps>;
      return React.cloneElement(radio, {
        checked: radio.props.value === value,
        onChange,
        name,
      });
    }

    return child;
  });

  return (
    <RadioGroupContainer className={className} $row={row}>
      {radioButtons}
    </RadioGroupContainer>
  );
};

export default RadioGroup;
