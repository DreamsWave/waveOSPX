import ReducedMotionContext from "@/contexts/ReducedMotionContext";
import { useContext } from "react";

const useReducedMotion = () => {
  const context = useContext(ReducedMotionContext);
  if (!context) {
    throw new Error(
      "useReducedMotion must be used within a ReducedMotionProvider"
    );
  }
  return context;
};

export default useReducedMotion;
