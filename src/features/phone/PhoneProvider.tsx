import { PhoneContext } from "@/features/phone/PhoneContext";
import { useTextInput } from "@/features/phone/keypad/useTextInput";
import type { ReactNode } from "react";

const PhoneProvider = ({ children }: { children: ReactNode }) => {
  const phoneInput = useTextInput();
  return (
    <PhoneContext.Provider value={phoneInput}>{children}</PhoneContext.Provider>
  );
};

export default PhoneProvider;
