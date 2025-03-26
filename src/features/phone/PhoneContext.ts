import type { useTextInput } from "@/features/phone/keypad/useTextInput";
import { createContext, useContext } from "react";

type PhoneInputContextType = ReturnType<typeof useTextInput>;

export const PhoneContext = createContext<PhoneInputContextType | null>(null);

export const usePhoneInput = (): PhoneInputContextType => {
  const context = useContext(PhoneContext);
  if (!context) {
    throw new Error("usePhoneInput must be used within a PhoneProvider");
  }
  return context;
};
