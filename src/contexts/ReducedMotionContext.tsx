import { useReducedMotion as useShouldReduceMotion } from "motion/react";
import { createContext, useEffect, useState } from "react";

const REDUCED_MOTION_KEY = "reduce-motion";

interface ReducedMotionContextType {
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
}

const ReducedMotionContext = createContext<
  ReducedMotionContextType | undefined
>(undefined);

export const ReducedMotionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const reducedMotionInitial = useShouldReduceMotion();
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    const saved = localStorage.getItem(REDUCED_MOTION_KEY);
    return saved ? JSON.parse(saved) : reducedMotionInitial;
  });

  useEffect(() => {
    localStorage.setItem(REDUCED_MOTION_KEY, JSON.stringify(reducedMotion));
  }, [reducedMotion]);

  const toggleReducedMotion = () => {
    setReducedMotion((prev) => !prev);
  };

  return (
    <ReducedMotionContext.Provider
      value={{ reducedMotion, toggleReducedMotion }}
    >
      {children}
    </ReducedMotionContext.Provider>
  );
};

export default ReducedMotionContext;
