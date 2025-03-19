import ToggleButton from "@/components/Debug/ToggleButton";
import useCamera from "@/hooks/useCamera";

const FocusToggleButton = () => {
  const { isFocused, toggleFocus } = useCamera();
  return (
    <ToggleButton label="focus" value={isFocused} onToggle={toggleFocus} />
  );
};

export default FocusToggleButton;
