import React from "react";
import styled from "styled-components";

const StyledFormLabel = styled.label<{ $disabled?: boolean }>`
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.common.text.muted : theme.common.text.primary};
  padding: 0;
  font-size: ${({ theme }) => theme.getFontSize("sm")};
  font-weight: 500;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  padding-bottom: ${({ theme }) => theme.s(1)}px;
  display: block;
  transform-origin: top left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export type FormLabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
};

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ children, htmlFor, id, disabled = false, className }, ref) => {
    return (
      <StyledFormLabel
        ref={ref}
        htmlFor={htmlFor}
        id={id}
        $disabled={disabled}
        className={className}
      >
        {children}
      </StyledFormLabel>
    );
  }
);

FormLabel.displayName = "FormLabel";

export default FormLabel;
