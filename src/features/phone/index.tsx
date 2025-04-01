import PhoneSVG from "@/assets/textures/phone/phone.svg";
import PhoneForm from "@/features/phone/keypad/components/PhoneForm";
import { PhoneContainer, PhoneTexture } from "@/features/phone/styles";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Phone() {
  const mode = useSelector((state: RootState) => state.mode.currentMode);

  if (mode !== "phone") {
    return null;
  }

  return (
    <PhoneContainer>
      <PhoneForm />
      <PhoneTexture src={PhoneSVG} alt="Phone texture" />
    </PhoneContainer>
  );
}
