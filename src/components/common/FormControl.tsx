import React from "react";
import styled from "styled-components";

const StyledFormControl = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: top;
`;

export type FormControlProps = {
  children: React.ReactNode;
  className?: string;
};

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ children, className }, ref) => {
    return (
      <StyledFormControl ref={ref} className={className}>
        {children}
      </StyledFormControl>
    );
  }
);

FormControl.displayName = "FormControl";

export default FormControl;
