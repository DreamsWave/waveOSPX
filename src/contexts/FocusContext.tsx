import { createContext, useCallback, useState } from "react";

type FocusContextType = {
  isFocused: boolean;
  toggleFocus: () => void;
};

const FocusContext = createContext<FocusContextType | undefined>(undefined);

export const FocusProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFocused, setIsFocused] = useState(true);

  const toggleFocus = useCallback(() => {
    setIsFocused((prev) => !prev);
  }, []);

  return (
    <FocusContext.Provider value={{ isFocused, toggleFocus }}>
      {children}
    </FocusContext.Provider>
  );
};

export default FocusContext;
