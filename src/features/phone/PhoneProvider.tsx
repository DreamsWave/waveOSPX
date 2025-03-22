import { useTextInput } from "@/features/phone/keypad/useTextInput";
import { PhoneContext } from "@/features/phone/PhoneContext";
import { ReactNode } from "react";

const PhoneProvider = ({ children }: { children: ReactNode }) => {
  const phoneInput = useTextInput();
  return (
    <PhoneContext.Provider value={phoneInput}>{children}</PhoneContext.Provider>
  );
};

export default PhoneProvider;
