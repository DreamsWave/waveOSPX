import StyledDebugButton from "@/components/Debug/StyledDebugButton";
import useFocus from "@/hooks/useFocus";

export const FocusToggleButton = () => {
  const { isFocused, toggleFocus } = useFocus();

  return (
    <StyledDebugButton onClick={toggleFocus}>
      {isFocused ? "F" : "UF"}
    </StyledDebugButton>
  );
};

export default FocusToggleButton;
