import useFocus from "@/hooks/useFocus";
import styled from "styled-components";

const FocusToggleButtonStyled = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  padding: 0;
  margin: 0;
  background: #000;
  color: #fff;
  opacity: 0.5;
  cursor: pointer;
`;

export const FocusToggleButton = () => {
  const { isFocused, toggleFocus } = useFocus();

  return (
    <FocusToggleButtonStyled onClick={toggleFocus}>
      {isFocused ? "Focused" : "Unfocused"}
    </FocusToggleButtonStyled>
  );
};

export default FocusToggleButton;
