import React from "react";
import styled from "styled-components";

const LabelContainer = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: end;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  user-select: none;
  margin: ${({ theme }) => theme.s(2)}px;
`;

const LabelText = styled.span<{ $disabled?: boolean }>`
  margin-left: ${({ theme }) => theme.s(3)}px;
  font-size: ${({ theme }) => theme.getFontSize("base")};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.common.text.muted : theme.common.text.primary};
`;

type ControlProps = {
  disabled?: boolean;
  required?: boolean;
  id?: string;
};

type FormControlLabelProps = {
  control: React.ReactElement<ControlProps>;
  label: React.ReactNode;
  disabled?: boolean;
  className?: string;
  id?: string;
  required?: boolean;
};

const FormControlLabel: React.FC<FormControlLabelProps> = ({
  control,
  label,
  disabled = false,
  className,
  id,
  required = false,
}) => {
  const controlElement = React.cloneElement(control, {
    disabled: disabled || control.props.disabled,
    id: id,
    required: required || control.props.required,
  });

  return (
    <LabelContainer $disabled={disabled} className={className} htmlFor={id}>
      {controlElement}
      <LabelText $disabled={disabled}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </LabelText>
    </LabelContainer>
  );
};

export default FormControlLabel;
