import StyledDebugButton from "@/components/Debug/StyledDebugButton";
import useReducedMotion from "@/hooks/useReducedMotion";

const ReducedMotionToggleButton = () => {
  const { reducedMotion, toggleReducedMotion } = useReducedMotion();

  return (
    <StyledDebugButton onClick={toggleReducedMotion}>
      {reducedMotion ? "RM: ON" : "RM: OFF"}
    </StyledDebugButton>
  );
};

export default ReducedMotionToggleButton;
