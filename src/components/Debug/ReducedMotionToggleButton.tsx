import ToggleButton from "@/components/Debug/ToggleButton";
import useSettings from "@/hooks/useSettings";

const ReducedMotionToggleButton = () => {
  const { reducedMotion, toggleReducedMotion } = useSettings();
  return (
    <ToggleButton
      label="reduced motion"
      value={reducedMotion}
      onToggle={toggleReducedMotion}
    />
  );
};

export default ReducedMotionToggleButton;
