import useCamera from "@/hooks/useCamera";
import { MotionValue, useMotionValue } from "motion/react";
import { createContext, ReactNode, useContext } from "react";

type BackgroundContextType = {
  backgroundX: MotionValue<number>;
  backgroundY: MotionValue<number>;
  isFocused: boolean;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const BackgroundProvider = ({ children }: Props) => {
  const backgroundX = useMotionValue(0);
  const backgroundY = useMotionValue(0);
  const { isFocused } = useCamera();

  // Mouse movement logic moved here (or kept in Camera)
  return (
    <BackgroundContext.Provider value={{ backgroundX, backgroundY, isFocused }}>
      {children}
    </BackgroundContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};
