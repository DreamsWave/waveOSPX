import StyledDebugButton from "@/components/Debug/StyledDebugButton";
import useReducedMotion from "@/hooks/useReducedMotion";

const ReducedMotionToggleButton = () => {
  const { reducedMotion, toggleReducedMotion } = useReducedMotion();

  return (
    <StyledDebugButton onClick={toggleReducedMotion}>
      reduced motion: {reducedMotion ? "on" : "off"}
    </StyledDebugButton>
  );
};

export default ReducedMotionToggleButton;
